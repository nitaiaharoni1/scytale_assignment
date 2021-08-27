import { Request, Response, Router } from 'express';
import mongoose, { FilterQuery } from 'mongoose';
import { PullRequestModel } from '../models/pullRequest';
import { IPullRequest, IPullRequestGetRequest, IPullRequestPostRequest } from '../interfaces';

export const prRoutes = Router();

//Fetches a list of all existing pull requests.
prRoutes.get('/', async (req: Request<{}, {}, {}, Partial<IPullRequestGetRequest>>, res: Response) => {
  try {
    const { status, labels } = req.query;
    const query: FilterQuery<any> = {
      ...(status && { status }),
      ...(labels && { labels: { $in: labels?.split(',') } })
    };
    const prs = await PullRequestModel.find(query);
    res.send(prs)
  } catch (e) {
    res.status(500).send(e.message);
  }
});

//Creates a new pull request.
prRoutes.post('/', async (req: Request<{}, {}, IPullRequestPostRequest>, res: Response) => {
  try {
    const { title, description, status, labels, author, prNumber } = req.body;
    const parsedLables: string[] = labels?.split(',') || [];
    const newPullRequest = new PullRequestModel({ _id: new mongoose.Types.ObjectId(), title, description, status, author, prNumber, labels: parsedLables });
    const pr = await newPullRequest.save();
    res.send(pr)
  } catch (e) {
    res.status(500).send(e.message);
  }
});
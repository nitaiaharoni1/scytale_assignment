import axios from 'axios';
import { GetPullRequestsParams, PullRequestData } from './types';
import { PullRequest } from '../models/pullRequest';

export const getPullRequests = async (params: GetPullRequestsParams): Promise<any> => {
  try {
    const res = await axios.get('/prs', { params });
    if (!res?.data) return;
    return res?.data?.map((pr: PullRequestData) => new PullRequest(pr));
  } catch (e) {
    return;
  }
}

export const createPullRequest = async (body: PullRequest): Promise<any> => {
  try {
    const res = await axios.post('/prs', body);
    if (!res?.data) return;
    return true;
  } catch (e) {
    return;
  }
}

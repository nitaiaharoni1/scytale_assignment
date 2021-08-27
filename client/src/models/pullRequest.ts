import { PullRequestData } from '../api/types';

export class PullRequest implements PullRequestData {
  id;
  createdAt;
  description;
  author;
  labels;
  prNumber;
  status;
  title;

  constructor(data?: PullRequestData) {
    this.id = data?._id;
    this.description = data?.description;
    this.labels = data?.labels;
    this.prNumber = data?.prNumber;
    this.status = data?.status;
    this.createdAt = data?.createdAt;
    this.title = data?.title;
    this.author = data?.author;
  }

}
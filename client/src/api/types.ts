import { IStatus } from '../types/IStatus';

export interface GetPullRequestsParams {
  labels?: string[];
  status?: 'Draft' | 'Open' | 'Closed';
}

export interface PullRequestData  {
  _id?: string;
  prNumber?: number | string;
  title?: string;
  description?: string;
  author?: string;
  status?: IStatus;
  labels?: string[] | any;
  createdAt?: string;
}
import mongoose from 'mongoose';

export interface IPullRequest extends Document {
  _id?: mongoose.Schema.Types.ObjectId;
  prNumber: number;
  title: string;
  description: string;
  author?: string;
  status: IStatus;
  labels: string[];
  createdAt: any;
}

export interface IPullRequestPostRequest {
  prNumber?: number;
  title?: string;
  description?: string;
  author?: string;
  status?: IStatus;
  labels?: string;
}

export interface IPullRequestGetRequest {
  status: IStatus;
  labels: string;
}

export interface IPullRequestQuery {
  status: IStatus;
  labels: string[];
}

export type IStatus = 'Draft' | 'Open' | 'Closed';
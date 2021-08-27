import mongoose, { model, Schema } from 'mongoose';
import { IPullRequest } from '../interfaces';

const pullRequestSchema = new Schema<IPullRequest>({
  _id: mongoose.Schema.Types.ObjectId,
  prNumber: { type: Number },
  title: { type: String },
  description: { type: String },
  author: { type: String },
  status: { type: String },
  labels: { type: [String] },
  createdAt: { type: Date, default: Date.now }
});

export const PullRequestModel = model<IPullRequest>('PullRequest', pullRequestSchema)
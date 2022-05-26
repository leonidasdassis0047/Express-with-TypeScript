import mongoose from 'mongoose';
import { IPost } from './posts.interface';

const postSchema = new mongoose.Schema(
  {
    author: { type: String, required: true, trim: true },
    content: { type: String, required: true, trim: true },
    title: { type: String, required: true, trim: true }
  },
  { timestamps: true }
);

export const PostModel = mongoose.model<IPost & mongoose.Document>(
  'Post',
  postSchema
);

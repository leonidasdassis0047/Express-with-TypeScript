import mongoose, { Document } from 'mongoose';
import { IUser } from './users.interface';

const userSchema = new mongoose.Schema<IUser & Document>(
  {
    email: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    username: { type: String, required: true, trim: true }
  },
  { timestamps: true }
);

export const UserModel = mongoose.model<IUser & Document>('User', userSchema);

import { IPost } from './posts.interface';
import { PostModel } from './posts.model';

export class PostService {
  public createPost = async (post: IPost): Promise<IPost> => {
    const newPost = await PostModel.create(post);
    return newPost;
  };
}

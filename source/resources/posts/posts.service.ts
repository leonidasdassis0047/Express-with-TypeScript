import { HTTPException } from '../../utils/exceptions';
import { IPost } from './posts.interface';
import { PostModel } from './posts.model';

export class PostService {
  public createPost = async (post: IPost): Promise<IPost> => {
    try {
      const newPost = await PostModel.create(post);
      return newPost;
    } catch (error: any) {
      throw new Error(error?.message);
    }
  };

  /**
   *
   * @param opts: options for filtering what posts to fetch.
   * @returns: Posts
   */
  public fetchPosts = async (opts: object = {}): Promise<IPost[]> => {
    const posts = await PostModel.find(opts);
    return posts;
  };

  /**
   *
   * @param id: post id
   * @param update: values for updating the post
   * @returns: Post
   */
  public updatePost = async (id: string, update: IPost): Promise<IPost> => {
    const post = await PostModel.findByIdAndUpdate(id, update, { new: true });
    if (post === null) {
      throw new HTTPException(404, `Post with "${id}" was not found`);
    }
    return post;
  };

  /**
   *
   * @param id: post id
   * @returns: Post
   */
  public deletePost = async (id: string): Promise<IPost> => {
    const post = await PostModel.findByIdAndDelete(id);
    if (post === null) {
      throw new HTTPException(404, `Post not found`);
    }
    return post;
  };
}

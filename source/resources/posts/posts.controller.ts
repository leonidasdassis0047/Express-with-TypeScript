import { NextFunction, Request, Response, Router } from 'express';
import AsyncHandler from '../../utils/AsyncHandler';
import { Controller } from '../../utils/interfaces';
import { IPost } from './posts.interface';
import { PostModel } from './posts.model';

export class PostController extends Controller {
  public path = '/posts';
  public router = Router();

  constructor() {
    super();
    this.initializeRoutes();
  }

  protected initializeRoutes(): void {
    this.router.route(this.path).get(AsyncHandler(this.getAllPosts.bind(this)));
    this.router
      .route(this.path)
      .post(AsyncHandler(this.createNewPost.bind(this)));
  }

  /**
   * @description: fetch all posts, includes filtering
   */
  private async getAllPosts(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    const posts = await PostModel.find({});
    response.send(posts);
  }

  /**
   * @description: create a new post
   */
  private createNewPost = async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> => {
    const post: IPost = request.body;
    const createdPost = await PostModel.create(post);
    response.send(createdPost);
  };
}

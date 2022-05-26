import { NextFunction, Request, Response, Router } from 'express';
import { ValidationMiddleware } from '../../middlewares';
import AsyncHandler from '../../utils/AsyncHandler';
import { Controller } from '../../utils/interfaces';
import { IPost } from './posts.interface';
import { PostService } from './posts.service';
import { createPostValidator, updatePostValidator } from './posts.validation';

export class PostController extends Controller {
  public path = '/posts';
  public router = Router();
  private Service = new PostService();

  constructor() {
    super();
    this.initializeRoutes();
  }

  protected initializeRoutes(): void {
    this.router.route(this.path).get(AsyncHandler(this.getAllPosts.bind(this)));

    this.router
      .route(this.path)
      .post([
        ValidationMiddleware(createPostValidator),
        AsyncHandler(this.createNewPost.bind(this))
      ]);

    this.router
      .route(this.path + '/:post_id')
      .patch(
        ValidationMiddleware(updatePostValidator),
        AsyncHandler(this.updatePost.bind(this))
      );

    this.router
      .route(this.path + '/:post_id')
      .delete(AsyncHandler(this.deletePost.bind(this)));
  }

  /**
   * @description: fetch all posts, includes filtering
   */
  private async getAllPosts(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    const posts = await this.Service.fetchPosts();
    response.send({ resultsCount: posts.length, results: posts });
  }

  /**
   * @description: create a new post controller
   */
  private createNewPost = async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> => {
    const post: IPost = request.body;
    const createdPost = await this.Service.createPost(post);
    response.send(createdPost);
  };
  /**
   * @description: update post controller
   */
  private updatePost = async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> => {
    const postUpdate: IPost = request.body;
    const postId: string = request.params.post_id;
    const updatedPost = await this.Service.updatePost(postId, postUpdate);
    response.send(updatedPost);
  };

  /**
   * @description: delete post controller
   */
  private deletePost = async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> => {
    const postId: string = request.params.post_id;
    const updatedPost = await this.Service.deletePost(postId);
    response.send(updatedPost);
  };
}

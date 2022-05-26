import { NextFunction, Request, Response, Router } from 'express';
import { Controller } from '../../utils/interfaces';
import { IPost } from './posts.interface';

export class PostController extends Controller {
  public path = '/posts';
  public router = Router();

  constructor() {
    super();
    this.initializeRoutes();
  }

  // to be deleted ...
  private samplePosts: IPost[] = [
    { author: 'Leonidas', content: 'Hi there Mom and Dad', title: 'Greetings' }
  ];

  protected initializeRoutes(): void {
    this.router
      .route(this.path)
      .get((request: Request, response: Response, next: NextFunction) => {
        response.send(this.samplePosts);
      });
  }
}

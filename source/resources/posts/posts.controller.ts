import { NextFunction, Request, Response, Router } from 'express';
import { Controller } from '../../utils/interfaces';

export class PostController extends Controller {
  public path = '/posts';
  public router = Router();

  constructor() {
    super();
    this.initializeRoutes();
  }

  protected initializeRoutes(): void {
    this.router
      .route(this.path)
      .get((request: Request, response: Response, next: NextFunction) => {});
  }
}

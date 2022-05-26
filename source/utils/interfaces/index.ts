import { Router } from 'express';

export interface IController {
  path: string;
  router: Router;
}

export abstract class Controller {
  abstract path: string;
  abstract router: Router;
  protected abstract initializeRoutes(): void;
}

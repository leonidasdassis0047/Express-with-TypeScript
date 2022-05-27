import { NextFunction, Request, Response, Router } from 'express';
import AsyncHandler from '../../utils/AsyncHandler';
import { Controller } from '../../utils/interfaces';

export class AuthController extends Controller {
  public path = '/auth';
  public router = Router();

  protected initializeRoutes(): void {
    this.router
      .route(this.path + '/register')
      .post(AsyncHandler(this.register.bind(this)));

    this.router
      .route(this.path + '/login')
      .post(AsyncHandler(this.login.bind(this)));
  }

  /**
   * @description: user registration
   * @params: user registration details
   * @access: Public
   * @route: api/v1/auth/register
   */
  private register = async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> => {
    response.send('registration');
  };

  /**
   * @description: user login
   * @params: user login details
   * @access: Public
   * @route: api/v1/auth/login
   */
  private login = async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> => {
    response.send('login');
  };
}

export class UserController extends Controller {
  public path = '/users';
  public router = Router();

  protected initializeRoutes(): void {
    this.router
      .route(this.path)
      .post(AsyncHandler(this.getAllUsers.bind(this)));
  }

  /**
   * @description: fetch all users, includes filtering
   * @access: Private
   * @route: api/v1/users
   */
  private async getAllUsers(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> {
    response.send({ users: [] });
  }
}

import { NextFunction, Request, Response } from 'express';
import { HTTPException } from '../utils/exceptions';

const ErrorHandlerMiddleware = (
  error: HTTPException,
  request: Request,
  response: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction
): void => {
  const status = error.statusCode || 500;
  const message = error.message || 'Server error';

  response.status(status).send({ message, status });
};

export default ErrorHandlerMiddleware;

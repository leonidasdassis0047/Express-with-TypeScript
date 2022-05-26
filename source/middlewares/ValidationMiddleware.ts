import { NextFunction, Request, RequestHandler, Response } from 'express';
import Joi from 'joi';

const ValidationMiddleware = (Schema: Joi.Schema): RequestHandler => {
  return async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const validationResults = await Schema.validateAsync(request.body, {
        allowUnknown: true,
        abortEarly: true
      });

      request.body = validationResults;
      next();
    } catch (error: any) {
      const validationErrors: string[] = [];
      error.details.forEach((validationError: Joi.ValidationErrorItem) => {
        validationErrors.push(validationError.message);
      });

      response.status(400).send({ errors: validationErrors });
    }
  };
};

export default ValidationMiddleware;

import Joi from 'joi';

export const createPostValidator = Joi.object({
  author: Joi.string().required().trim().label('Post Author'),
  content: Joi.string().required().trim().label('Post Content'),
  title: Joi.string().required().trim().label('Post Title')
});

export const updatePostValidator = Joi.object({
  author: Joi.string().optional().trim().label('Post Author'),
  content: Joi.string().optional().trim().label('Post Content'),
  title: Joi.string().optional().trim().label('Post Title')
});

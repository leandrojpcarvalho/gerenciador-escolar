import Joi from 'joi';

export const loginSchema = Joi.object({
  email: Joi.string().email({tlds:{allow: false}}).required(),
  password: Joi.string().min(6).max(12).required(),
});

export const userSchema = Joi.object({
  email: Joi.string().email({tlds:{allow: false}}).required(),
  password: Joi.string().min(6).max(12).required(),
  addressId: Joi.number().greater(0).required(),
});

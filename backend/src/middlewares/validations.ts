import { Response, Request, NextFunction} from 'express';
import {Middlewares} from '../types';
import schemas from './schema';



export const loginValidation: Middlewares = async (req, res, next) => {
  try{
    const { body } = req;
    await schemas.loginSchema.validateAsync(body);
    next();
  }catch (error: any) {
    return res.status(400).json(error.message)
  }
}

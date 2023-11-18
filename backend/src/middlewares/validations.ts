import { StatusCodes } from 'http-status-codes';
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

export const newUserValidation: Middlewares = async (req, res, next) => {
  try {
    const {body} = req;
    await schemas.userSchema.validateAsync(body);
    next();
  } catch (error: any) {
    return res.status(StatusCodes.BAD_REQUEST).json(error.message)
  }
}

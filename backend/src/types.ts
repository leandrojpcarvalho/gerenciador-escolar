import exp from 'constants';
import { Request, Response, NextFunction } from 'express';

export interface Middlewares {
  (req: Request, res: Response, next: NextFunction) : Promise<Response | undefined>;
}

export interface Service<T,R> {
  (param:T) : Promise<ServiceResponse<R>>
}

export interface ServiceResponse<T> {
  status: number;
  payload: T;
}

export interface Login {
  email: string;
  password: string;
}

export interface Token {
  token: string;
}

export interface Error {
  message: string;
}
import { StatusCodes } from 'http-status-codes'
import { Error } from './types';

export class Return<T> {
  public status: number;
  public payload: T;
  constructor(status:number, message: T) {
    this.status = status;
    this.payload = message;
  }
}
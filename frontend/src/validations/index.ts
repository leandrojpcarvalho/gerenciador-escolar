import React from 'react';
import { Login } from '../types';
import { loginSchema } from './schema/schemasValidations';

type Error = {
  message: string;
}

export const validationLogin = async(
  obj: Login,
  setState: React.Dispatch<React.SetStateAction<string>>
) => {
  try {
    await loginSchema.validateAsync(obj);
    setState('no errors');
  } catch (err) {
    const error = err as Error;
    setState(error.message);
  }
};

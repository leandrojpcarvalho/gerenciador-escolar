import { createAsyncThunk } from '@reduxjs/toolkit';
import Fetch from '../../fetch';
import { Login, Request } from '../../types';

const url = import.meta.env.BASE_URL;
let path ='http://localhost:3333';
console.log(url);
if ( url !== '/') {
  path = url;
}

const login = createAsyncThunk(
  'login/authentication',
  async (obj: Request<Login>,{ rejectWithValue }) => {
    try {
      const req = Fetch.requestMaker(obj);
      console.log(req);
      const response = await fetch(`${path}/login`, req);
      const data = await response.json();
      return data;
    } catch (error) {
      let message = 'unknown error';
      if (error instanceof Error) message = error.message;
      return rejectWithValue(message);
    }
  },
);


export const Actions = {
  login,
};

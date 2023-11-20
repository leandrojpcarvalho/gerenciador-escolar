import { createSlice } from '@reduxjs/toolkit';
import { Actions } from '../actions';
import { Request, Login } from '../../types';
import { RootState } from '../../store';

type RequestState = 'pending' | 'fulfilled' | 'rejected';

const authentication = createSlice({
  name: 'login',
  initialState: {
    data: {} as Record<string, Request<Login> | undefined>,
    statusByName: {} as Record<string, RequestState | undefined>,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Actions.login.pending, (state, action) => {
        state.statusByName[action.meta.requestStatus] = 'pending';
      })
      .addCase(Actions.login.fulfilled, (state, action) => {
        state.statusByName[action.meta.requestStatus] = 'fulfilled';
        state.data[action.payload] = action.payload;
      })
      .addCase(Actions.login.rejected, (state, action) => {
        state.statusByName[action.meta.requestStatus] = 'rejected';
      });
  },
});

export const statusByName = (state: RootState, name: string) =>
  state.auth.statusByName[name];
export const dataByName = (state: RootState, name: string) => 
  state.auth.statusByName[name];


export default authentication;

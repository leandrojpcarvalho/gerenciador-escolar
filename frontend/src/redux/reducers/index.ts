import { createSlice } from '@reduxjs/toolkit';
import { Actions } from '../actions';
import { RootState } from '../../store';

type RequestState = 'pending' | 'fulfilled' | 'rejected';
type Error = { message: string };

const authentication = createSlice({
  name: 'login',
  initialState: {
    count: 0,
    token: '',
    error: {} as Record<string, Error | undefined>,
    statusByName: {} as Record<string, RequestState | undefined>,
  },
  reducers: {
    count: (state) => {
      state.count++;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(Actions.login.pending, (state, action) => {
        if (!action.meta.arg.body) return;
        state.statusByName[action.meta.arg.body.email] = 'pending';
      })
      .addCase(Actions.login.fulfilled, (state, action) => {
        if (!action.meta.arg.body) return;
        state.statusByName[action.meta.arg.body.email]  = 'fulfilled';
        if(Object.keys(action.payload).includes('message')) {
          state.error[action.meta.arg.body.email] = action.payload;
          return;
        }
        state.token = action.payload.token;
      })
      .addCase(Actions.login.rejected, (state, action) => {
        if (!action.meta.arg.body) return;
        state.statusByName[action.meta.arg.body.email]  = 'rejected';
      });
  },
});

export const statusByName = (state: RootState, name: string) =>
  state.auth.statusByName[name];
export const dataByName = (state: RootState, name: string) => 
  state.auth.statusByName[name];

export default authentication;

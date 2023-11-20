import { configureStore } from '@reduxjs/toolkit';
import authentication from './redux/reducers';

export const store = configureStore({
  reducer: {
    auth: authentication.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
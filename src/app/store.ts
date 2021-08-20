import { configureStore } from '@reduxjs/toolkit';
import type { ThunkAction, Action } from '@reduxjs/toolkit';
import { UserService } from './domain/user/user.service';

export const store = configureStore({
  reducer: {
    [UserService.reducerPath]: UserService.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

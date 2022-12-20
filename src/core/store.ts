import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/auth.slice';
import userSlice from './user/user.slice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

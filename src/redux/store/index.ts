import { AnyAction, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { authReducer } from './auth';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;

export const appDispatch = store.dispatch;
export type AppDispatch = typeof store.dispatch;
export type AsyncAction = ThunkAction<void, RootState, unknown, AnyAction>;

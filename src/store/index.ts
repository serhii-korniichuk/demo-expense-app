import { combineReducers } from 'redux';
import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { userReducer } from 'store/slices/user';

const rootReducer = combineReducers({
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import passSlice from "./passSlice";

export const store = configureStore({
  reducer: {
    pass: passSlice,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

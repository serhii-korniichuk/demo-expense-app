import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './auth-reducer';

const initialState = {
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.registerUser.matchFulfilled,
      (state, { payload }) => {
        console.log(payload);
        state.token = payload.accessToken;
        state.isLoggedIn = true;
      },
    );
    builder.addMatcher(
      authApi.endpoints.loginUser.matchFulfilled,
      (state, { payload }) => {
        console.log(payload);
        state.token = payload.accessToken;
        state.isLoggedIn = true;
      },
    );
    builder.addMatcher(authApi.endpoints.logoutUser.matchFulfilled, state => {
      state.token = null;
      state.isLoggedIn = false;
    });
  },
});

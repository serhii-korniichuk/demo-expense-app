import { createSlice } from "@reduxjs/toolkit";
import {
  logInUser,
  logOutUser,
  reconnectUser,
  registerUser,
} from "./authThunk";

const initialState = {
  token: null,
  isLoggedIn: false,
  isFetching: false,
  errorMessage: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetError: (state) => {
      state.errorMessage = "";
    },
  },
  extraReducers: {
    [logInUser.fulfilled](state, { payload }) {
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isFetching = false;
    },
    [registerUser.fulfilled](state, { payload }) {
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isFetching = false;
    },
    [logOutUser.fulfilled](state, _) {
      state.token = null;
      state.isLoggedIn = false;
      state.isFetching = false;
    },
    [reconnectUser.fulfilled](state, { payload }) {
      state.isLoggedIn = true;
      state.isFetching = false;
    },
    [logInUser.pending](state, _) {
      state.isFetching = true;
    },
    [registerUser.pending](state, _) {
      state.isFetching = true;
    },
    [logOutUser.pending](state, _) {
      state.isFetching = true;
    },
    [reconnectUser.pending](state, _) {
      state.isFetching = true;
    },
    [logInUser.rejected](state, { payload }) {
      state.errorMessage = payload;
      state.isLoggedIn = false;
      state.isFetching = false;
    },
    [registerUser.rejected](state, { payload }) {
      state.errorMessage = payload;
      state.isLoggedIn = false;
      state.isFetching = false;
    },
    [logOutUser.rejected](state, { payload }) {
      state.errorMessage = payload;
      state.isFetching = false;
    },
    [reconnectUser.rejected](state, { payload }) {
      state.errorMessage = payload;
      state.token = null;
      state.isLoggedIn = false;
      state.isFetching = false;
    },
  },
});

export const { resetError } = authSlice.actions;

import { createSlice } from "@reduxjs/toolkit";
import {
  loginUser,
  logoutUser,
  refreshTokenFn,
  registerUser,
} from "./authThunk";

const initialState = {
  user: "",
  accessToken: "",
  refreshToken: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    });
    builder.addCase(loginUser.pending, (state, action) => {
      state.user = action.meta.arg.username;
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.user = "";
      state.accessToken = "";
      state.refreshToken = "";
    });
    builder.addCase(refreshTokenFn.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
    });
  },
});

export default authSlice.reducer;

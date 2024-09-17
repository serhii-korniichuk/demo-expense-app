import { createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "../types/sliceType";
import {
  fetchAuthLogin,
  fetchAuthRegister,
  fetchCheckAuth,
} from "./userThunks";

const initialState: IInitialState = {
  admin: false,
  authLoginError: null,
  authRegisterError: null,
  id: 0,
  accessToken: localStorage.getItem("token"),
  refreshToken: localStorage.getItem("refresh-token"),
  fullname: "",
  password: "",
  username: "",
  isRegister: false,
  isAuth: false,
};

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    authLogin: (state, action) => {
      (state.accessToken = action.payload.accessToken),
        (state.refreshToken = action.payload.refreshToken);
    },
    authRegister: (state, action) => {
      (state.password = action.payload.password),
        (state.username = action.payload.username),
        (state.fullname = action.payload.displayName);
    },
    authReset: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("refresh-token");

      state.accessToken = "";
      state.refreshToken = "";
      state.admin = false;
      state.authLoginError = null;
      state.authRegisterError = null;
      state.fullname = "";
      state.id = 0;
      state.password = "";
      state.username = "";
      state.isRegister = false;
      state.isAuth = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAuthRegister.fulfilled, (state, action) => {
      state.fullname = action.payload.displayName;
      state.username = action.payload.username;
      state.admin = action.payload.admin;
      state.id = action.payload.id;
      state.isRegister = true;
    });
    builder.addCase(fetchAuthRegister.rejected, (state) => {
      state.authRegisterError = "This username is already used";
    });
    builder.addCase(fetchAuthLogin.rejected, (state) => {
      state.authLoginError = "User not found";
    });
    builder.addCase(fetchAuthLogin.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.authLoginError = null;
      state.isAuth = true;

      localStorage.setItem("token", JSON.stringify(action.payload.accessToken));
      localStorage.setItem(
        "refresh-token",
        JSON.stringify(action.payload.refreshToken)
      );
    });
    builder.addCase(fetchCheckAuth.fulfilled, (state, action) => {
      state.accessToken = action.payload.accessToken;

      localStorage.setItem("token", JSON.stringify(action.payload.accessToken));
    });
  },
});

export const { authLogin, authRegister, authReset } = userReducer.actions;

export default userReducer.reducer;

import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../http";
import {
  IUserLogin,
  IUserRegister,
  IUserRegisterResponse,
  IUserResponce,
} from "../types/sliceType";
import { authReset } from "./userSlice";

export const fetchAuthLogin = createAsyncThunk<IUserResponce, IUserLogin>(
  "auth/Login",
  async function (authLoginData) {
    const response = await api.post("/auth/login", {
      ...authLoginData,
    });

    return response.data;
  }
);

export const fetchAuthRegister = createAsyncThunk<
  IUserRegisterResponse,
  IUserRegister
>("auth/Register", async function (authRegisterData) {
  const response = await api.post("/auth/register", {
    ...authRegisterData,
  });

  return response.data;
});

export const fetchAuthLogout = createAsyncThunk<void>(
  "auth/Register",
  async function (_, { dispatch }) {
    await api.get("/auth/logout");
    dispatch(authReset());
  }
);

export const fetchCheckAuth = createAsyncThunk<IUserResponce>(
  "auth/CheckAuth",
  async function () {
    const response = await api.post("/auth/refresh", {
      refreshToken: JSON.parse(localStorage.getItem("refresh-token")!),
    });

    return response.data;
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toastr from "toastr";
import {
  ILoginData,
  IRefreshTokenData,
  IRegisterData,
} from "../pages/auth/types";
import { instance } from "../utils/";

export const registerUser = createAsyncThunk(
  "register",
  async (data: IRegisterData, { rejectWithValue }) => {
    try {
      const user = await instance.post("register", data);
      return user.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const loginUser = createAsyncThunk(
  "login",
  async (data: ILoginData, { rejectWithValue }) => {
    try {
      const user = await instance.post("login", data);
      return user.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const logoutUser = createAsyncThunk(
  "logout",
  async (data: string, { rejectWithValue }) => {
    try {
      const user = await axios.get("https://expa.fly.dev/auth/logout", {
        headers: {
          Authorization: `Bearer ${data}`,
        },
      });
      return user;
    } catch (error: any) {
      toastr.error(error, "You need to re-login");
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const refreshTokenFn = createAsyncThunk(
  "refresh",
  async (data: IRefreshTokenData, { rejectWithValue }) => {
    try {
      const user = await instance.post("refresh", data);
      return user.data;
    } catch (error: any) {
      toastr.error(error, "You need to re-login");
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

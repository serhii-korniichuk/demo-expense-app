import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  ADD_NOTIFICATION,
  CHANGE_NOTIFICATIONS,
  REGISTER,
  LOGIN,
  LOGOUT,
} from "./types";

const BASE_URL = "https://expa.fly.dev";

export const addNotification = (payload) => ({
  type: ADD_NOTIFICATION,
  payload,
});

export const changeNotifications = (payload) => ({
  type: CHANGE_NOTIFICATIONS,
  payload,
});

export const register = createAsyncThunk(REGISTER, async (data) => {
  const res = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((data) => data.json());

  return res;
});

export const login = createAsyncThunk(LOGIN, async (data) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((data) => data.json());

  return res;
});

export const logout = createAsyncThunk(LOGOUT, async () => {
  let refreshToken = document.cookie.match(
    new RegExp("(^| )refreshToken=([^;]+)")
  );
  refreshToken = refreshToken[2];

  const res = await fetch(`${BASE_URL}/auth/logout`, {
    // credentials: "include",
    headers: {
      Authorization: `Token ${refreshToken.toString("base64")}`,
      "Access-Control-Allow-Origin":
        "https://cookiewithevil.github.io/demo-expense-app-git/",
      Accept: "application/json",
      "X-CSRF-TOKEN": refreshToken,
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  }).then((data) => data.json());

  return res;
});

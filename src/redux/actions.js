import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://expa.fly.dev";

export const changeNotifications = (payload) => ({
  type: "notifications",
  payload,
});

export const register = createAsyncThunk("register", async (data) => {
  const res = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((data) => data.json());

  return res;
});

export const login = createAsyncThunk("login", async (data) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((data) => data.json());

  return res;
});

export const logout = createAsyncThunk("logout", async (data) => {
  const res = await fetch(`${BASE_URL}/auth/logout`, {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((data) => data.json());

  return res;
});

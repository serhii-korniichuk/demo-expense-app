import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// axios baseUrl initializes in the index.js

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const logInUser = createAsyncThunk(
  "auth/logIn",
  async (userCredentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/auth/login", userCredentials);
      token.set(data.accessToken);
      return { token: data.accessToken };
    } catch (err) {
      switch (err.response.status) {
        case 401:
          return thunkAPI.rejectWithValue("Incorrect name or password");
        case 404:
          return thunkAPI.rejectWithValue("No user with this name");
        default:
          return thunkAPI.rejectWithValue(
            "Uknown error code " + err.response.status
          );
      }
    }
  }
);

export const logOutUser = createAsyncThunk(
  "auth/logOut",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/auth/logout");
      token.unset();
      return data;
    } catch (err) {
      switch (err.response.status) {
        case 401:
          return thunkAPI.rejectWithValue("Unauthorized user");
        case 500:
          return thunkAPI.rejectWithValue("Something is wrong with connection");
        default:
          return thunkAPI.rejectWithValue(
            "Uknown error code " + err.response.status
          );
      }
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userCredentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/auth/register", userCredentials);
      return { username: data.username, password: userCredentials.password };
    } catch (err) {
      switch (err.response.status) {
        case 409:
          return thunkAPI.rejectWithValue("This user name is already in use");
        case 400:
          return thunkAPI.rejectWithValue("Bad request. Try another one");
        case 500:
          return thunkAPI.rejectWithValue("Something is wrong with connection");
        default:
          return thunkAPI.rejectWithValue(
            "Uknown error code " + err.response.status
          );
      }
    }
  }
);

export const reconnectUser = createAsyncThunk(
  "auth/reconnect",
  async (_, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.token;

    if (persistedToken === null) return thunkAPI.rejectWithValue();

    token.set(persistedToken);
    try {
      const { data } = await axios.get("/users/self");
      return data;
    } catch (err) {
      switch (err.response.status) {
        case 401:
          return thunkAPI.rejectWithValue("Your token has expired");
        case 500:
          return thunkAPI.rejectWithValue("Something is wrong with connection");
        default:
          return thunkAPI.rejectWithValue(
            "Uknown error code " + err.response.status
          );
      }
    }
  }
);

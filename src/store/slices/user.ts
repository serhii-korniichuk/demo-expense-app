import axios from 'axios';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { LocalStorage } from 'utils/local-storage';
import { thunkPending, thunkRejected } from 'libraries/redux';

import { AuthRequests } from 'services/auth/AuthRequests';
import { ILogin, IRegister } from 'services/auth/Auth.types';

import { IUser, IUserProfile } from 'types';

const { REACT_APP_API_URL } = process.env;

const initialState: IUser = {
  userProfile: {} as IUserProfile,
  isAuthenticated: false,
  isLoading: true,
  isError: false,
};

export const getSelf = createAsyncThunk(
  'user/getSelf',
  async (_, { rejectWithValue }) => {
    try {
      const { response } = await AuthRequests.getSelf();

      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const login = createAsyncThunk(
  'user/login',
  async (params: ILogin, { rejectWithValue }) => {
    try {
      const { response } = await AuthRequests.login(params);

      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const register = createAsyncThunk(
  'user/register',
  async (params: IRegister, { rejectWithValue }) => {
    try {
      const { response } = await AuthRequests.register(params);

      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const logout = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      await AuthRequests.logout();
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const checkAuth = createAsyncThunk(
  'user/checkAuth',
  async (_, { rejectWithValue }) => {
    try {
      const refreshToken = LocalStorage.get('refreshToken');

      const { data } = await axios.post(
        `${REACT_APP_API_URL as string}auth/refresh`,
        {
          refreshToken,
        },
      );

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoading: (state: IUser, action) => {
      state.isLoading = false;
    },
  },
  extraReducers: {
    [getSelf.pending.toString()]: (state: IUser) => {
      return thunkPending(state);
    },
    [getSelf.fulfilled.toString()]: (state: IUser, action) => {
      const userProfile = action.payload;

      return {
        ...state,
        userProfile,
        isAuthenticated: true,
        isLoading: false,
      };
    },
    [getSelf.rejected.toString()]: (state: IUser, action) => {
      return thunkRejected(state);
    },

    [login.pending.toString()]: (state: IUser) => {
      return thunkPending(state);
    },
    [login.fulfilled.toString()]: (state: IUser, action) => {
      const { accessToken, refreshToken } = action.payload;

      LocalStorage.set('accessToken', accessToken);
      LocalStorage.set('refreshToken', refreshToken);

      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
      };
    },
    [login.rejected.toString()]: (state: IUser, action) => {
      const updateState = { ...thunkRejected(state), isAuthenticated: false };

      return { ...updateState };
    },

    [register.pending.toString()]: (state: IUser) => {
      return thunkPending(state);
    },
    [register.fulfilled.toString()]: (state: IUser) => {
      state.isError = false;
      state.isLoading = false;
    },
    [register.rejected.toString()]: (state: IUser) => {
      return thunkRejected(state);
    },

    [logout.pending.toString()]: (state: IUser) => {
      return thunkPending(state);
    },
    [logout.fulfilled.toString()]: (state: IUser, action) => {
      LocalStorage.removeAll();

      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
      };
    },
    [logout.rejected.toString()]: (state: IUser) => {
      const updateState = { ...thunkRejected(state), isAuthenticated: false };

      return { ...updateState };
    },

    [checkAuth.pending.toString()]: (state: IUser) => {
      return thunkPending(state);
    },
    [checkAuth.fulfilled.toString()]: (state: IUser, action) => {
      const { accessToken } = action.payload;
      LocalStorage.set('accessToken', accessToken);

      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
      };
    },
    [checkAuth.rejected.toString()]: (state: IUser) => {
      return thunkRejected(state);
    },
  },
});

const { actions, reducer: userReducer } = userSlice;
const userActions = actions;

export { userReducer, userActions, userSlice };

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { loginApi, loginArgs, registerApi, RegisterArgs } from '../../api/auth.api';
import { lsHelper } from '../../utils/ls-helper';

export type AuthState = {
  isLoading: boolean;
};

const initialState: AuthState = {
  isLoading: false,
};

export const authLogin = createAsyncThunk('auth/login', async (data: loginArgs) => {
  return await loginApi(data);
});

export const authRegister = createAsyncThunk('auth/register', async (data: RegisterArgs) => {
  return await registerApi(data);
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(authLogin.fulfilled, (state, action) => {
      state.isLoading = false;

      lsHelper('token', action.payload.data.accessToken).setValue();
    });
    builder.addCase(authLogin.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

// eslint-disable-next-line import/no-default-export
export default authSlice.reducer;

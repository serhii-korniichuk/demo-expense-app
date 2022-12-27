import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '.';
import { axionGET, axionPOST } from '../../api/api-client';
import {CacheClear, CacheSave} from '../../infrastructure/cache-manager';

interface propsSingIn {
  username: string,
  password: string,
}

interface propsSingUp {
  username: string,
  fullName: string,
  password: string,
}

interface Auth {
  id: number,
  username: string,
  displayName: string,
  admin: true
}

interface LoginTokens {
  accessToken: string,
  refreshToken: string
}

interface AuthState {
  loading: boolean;
  data : Auth | null;
  login: LoginTokens | null;
}

const initialState: AuthState = {
  loading: false,
  data: null,
  login: null,
}

export const authSlice = createSlice({
  name: 'SING_IN',
  initialState,
  reducers: {
    registerLoading: (state) => {
      state.loading = true;
    },

    register: (state, action: PayloadAction<Auth>) => {
      state.loading = false;
      state.data = action.payload;
      
    },

    login: (state, action: PayloadAction<LoginTokens>) => {
      state.loading = false;
      state.login = action.payload;

    },
  },
});

const { registerLoading, register, login } = authSlice.actions;

export const LoadingUser = () => async (dispatch: Dispatch) => {
  dispatch(registerLoading());
}

export const registerUser = ({username, fullName, password}: propsSingUp) => async (dispatch: Dispatch) => {
  dispatch(registerLoading());

  try {
      const user = await axionPOST({link: 'auth/register', data: {
        username,
        displayName: fullName,
        password,
      }});

      dispatch(register(user.data));
    } catch(error) {
      console.log(error);
    }
}

export const loginUser = ({username, password}: propsSingIn) => async (dispatch: Dispatch, getState: () => RootState) => {
  dispatch(registerLoading());

  try{
    const res = await axionPOST({link: 'auth/login', data: {
      username,
      password
    }});

    dispatch(login(res.data));
    
    CacheSave('accessToken', getState().auth?.login?.accessToken);

  }catch(err){
    console.log(err)
  }
}

export const logoutUser = () => async () => {
  await axionGET('auth/logout');
  await CacheClear()
}

export const authSelector = (state: RootState) => state.auth;
export const accessTokenSelector = (state: RootState) => state.auth.login?.accessToken;

export const authReducer = authSlice.reducer;

import { TRootState } from "..";

export const auth = (state: TRootState) => state.userSlice;

export const authLoginError = (state: TRootState) => auth(state).authLoginError;

export const authLoginToken = (state: TRootState) => auth(state).accessToken;

export const authRegisterCheck = (state: TRootState) => auth(state).isRegister;

export const authLoginCheck = (state: TRootState) => auth(state).isAuth;

export const authRegisterError = (state: TRootState) =>
  auth(state).authRegisterError;

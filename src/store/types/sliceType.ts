export interface IInitialState {
  id: number;
  admin: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  password: string;
  username: string;
  authLoginError: string | null;
  authRegisterError: string | null;
  fullname: string;
  isRegister: boolean;
  isAuth: boolean;
}

export interface IUserLogin {
  username: string;
  password: string;
}

export interface IUserResponce {
  accessToken: string;
  refreshToken: string;
}

export interface IUserRegister extends IUserLogin {
  displayName: string;
}

export interface IUserRegisterResponse {
  id: number;
  username: string;
  displayName: string;
  admin: boolean;
}

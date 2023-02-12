import { IUserProfile } from 'types';

export interface ISelfResponse {
  id: number;
  username: string;
  displayName: string;
  admin: boolean;
}

export interface ILogin {
  username: string;
  password: string;
}

export interface ILoginResponse {
  accessToken: string;
  refreshToken: string;
}

export interface IRegister {
  password: string;
  username: string;
  displayName: string;
}

export interface IRegisterResponse extends ISelfResponse {}

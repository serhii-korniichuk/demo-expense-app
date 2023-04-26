export interface MyFormValues {
  fullName?: string;
  userName: string;
  password: string;
  confirmPassword?: string;
}

export interface IRegisterData {
  username: string;
  password: string;
  displayName: string;
}

export interface ILoginData {
  username: string;
  password: string;
}

export interface IRefreshTokenData {
  refreshToken: string | null;
}

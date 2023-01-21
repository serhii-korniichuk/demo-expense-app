export interface IUserInfo {
  password: string
  displayName: string
  username: string
}

export interface IUserResponse {
  id: number
  username: string
  displayName: string
  admin: boolean
}

export interface IUserLogin {
  username: string
  password: string
}

export interface IUserLoginResponse {
  accessToken: string
  refreshToken: string
}

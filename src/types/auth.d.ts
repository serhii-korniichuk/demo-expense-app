declare interface IRegisterRequest {
  password: string
  username: string
  displayName: string
}

declare interface ILoginRequest {
  username: string
  password: string
}

declare interface ILoginResponse {
  accessToken: string
  refreshToken: string
}

declare interface IRegisterResponse {
  id: number
  username: string
  displayName: string
  admin: boolean
}

// declare type ParameterReq = Omit<ILoginRequest, 'accessToken'>

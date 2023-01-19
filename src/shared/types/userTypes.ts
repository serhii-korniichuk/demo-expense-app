export interface UserInfoInterface {
  password: string
  displayName: string
  username: string
}

export interface UserResponseInterface {
  id: number
  username: string
  displayName: string
  admin: boolean
}

export interface UserLoginInterface {
  username: string
  password: string
}

export interface UserLoginResponseInterface {
  accessToken: string
  refreshToken: string
}

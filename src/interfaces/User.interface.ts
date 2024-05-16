export default interface User {
  displayName: string;
  username: string;
}

export interface RegisterUser extends User {
  password: string;
}

export interface CreatedUser extends User {
  id: number;
  admin: boolean;
}

export interface Credentials {
  username: string;
  password: string;
}

export interface TokenPair {
  accessToken: string;
  refreshToken: string;
}

export interface IUserProfile {
  readonly id: number;
  username: string;
  displayName: string;
  admin: boolean;
  isError: boolean;
  isLoading: boolean;
}

export interface IUser {
  userProfile: IUserProfile;
  isAuthenticated: boolean;
  isLoading: boolean;
  isError: boolean;
}

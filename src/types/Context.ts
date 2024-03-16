import { IUser } from './User';

export interface IContext {
  isLoggedIn: boolean;
  logIn: (user: IUser) => void;
  logOut: () => void;
  register: (user: IUser) => void;
}

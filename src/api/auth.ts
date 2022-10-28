import { User } from '../types/User';
import { client } from '../utils/fetchClient';
import { ENDPOINTS } from './constants';

interface AuthToken {
  accessToken: string;
  refreshToken: string;
}

export const registerUser = (user: User) => {
  return client.post(ENDPOINTS.register, user);
};

export const loginUser = (username: string, password: string) => {
  return client.post<AuthToken>(ENDPOINTS.login, {
    username,
    password,
  });
};

export const logoutUser = () => client.get(ENDPOINTS.logout);

import { User } from './types';
import { client } from './fetch';

export const loginUser = async (username: string, password: string) => {
  return client.post<User>('/auth/login', { username, password });
};

export const createUser = (
  username: string,
  password: string,
  displayName: string,
) => {
  return client.post<User>('/auth/register', {
    username,
    password,
    displayName,
  });
};

export const logoutUser = async () => {
  return client.get('/auth/logout');
};

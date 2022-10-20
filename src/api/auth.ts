import { client } from '../components/Auth/fetchClient';
import {NewUser} from '../types/User'

export const login = (username: string, password: string) => {
  type AuthToken = {
    accessToken?: string,
    refreshToken?: string,
  };
  
  return client.post<AuthToken>('/auth/login', {
    username: username,
    password: password,
  });
};

export const refresh = () => {
  return client.post<string>('/auth/refresh',{});
};

export const register = (newUser: NewUser) => {
  return client.post<NewUser | number>('/auth/register', {
    username: newUser.username,
    password: newUser.password,
    displayName: newUser.displayName,
  });  
};

export const logout = () => {
  return client.get(`/auth/logout`);
};
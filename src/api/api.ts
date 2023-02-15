import axios from 'axios';
import {
  IUserInfo,
  IUserLogin,
  IUserLoginResponse,
  IUserResponse,
} from '../shared/types';

const baseInstance = axios.create({
  baseURL: 'https://expa.fly.dev',
});

const authHeaders = (): { Authorization: string } => ({
  Authorization: `Bearer ${localStorage.getItem('accessToken') ?? ''}`,
});

export const registerNewUser = async (
  userInfo: IUserInfo,
): Promise<{ data: IUserResponse }> => await baseInstance.post('/auth/register', userInfo);

export const login = async (
  userLoginData: IUserLogin,
): Promise<{ data: IUserLoginResponse }> =>
  await baseInstance.post('/auth/login', userLoginData);

export const getSelf = async (): Promise<{ data: IUserResponse }> =>
  await baseInstance.get('users/self', {
    headers: authHeaders(),
  });

export const logOut = async (): Promise<void> => {
  await baseInstance.get('auth/logout', {
    headers: authHeaders(),
  });
};

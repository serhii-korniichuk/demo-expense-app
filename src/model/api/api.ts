import axios from 'axios';
import {
  UserInfoInterface,
  UserResponseInterface,
  UserLoginInterface,
  UserLoginResponseInterface,
} from '../../shared/types';

const baseInstance = axios.create({
  baseURL: 'https://expa.fly.dev',
});

const authHeaders = (): { Authorization: string } => ({
  Authorization: `Bearer ${localStorage.getItem('accessToken') ?? ''}`,
});

export const registerNewUser = async (
  userInfo: UserInfoInterface,
): Promise<{ data: UserResponseInterface }> => await baseInstance.post('/auth/register', userInfo);

export const login = async (
  userLoginData: UserLoginInterface,
): Promise<{ data: UserLoginResponseInterface }> =>
  await baseInstance.post('/auth/login', userLoginData);

export const getSelf = async (): Promise<{ data: UserResponseInterface }> =>
  await baseInstance.get('users/self', {
    headers: authHeaders(),
  });

export const logOut = async (): Promise<void> => {
  await baseInstance.get('auth/logout', {
    headers: authHeaders(),
  });
};

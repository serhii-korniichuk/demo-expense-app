import { AxiosResponse } from 'axios';
import { ApiService } from './api.service';

export type loginArgs = {
  username: string;
  password: string;
};

export type RegisterArgs = loginArgs & {
  displayName: string;
};

type Token = {
  accessToken: string;
  refreshToken: string;
};

export const loginApi = async (data: loginArgs): Promise<AxiosResponse<Token>> =>
  await ApiService.post('/auth/login', data);

export const registerApi = async (data: RegisterArgs): Promise<AxiosResponse<Token>> =>
  await ApiService.post('/auth/register', data);

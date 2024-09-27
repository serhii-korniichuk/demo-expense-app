import { AxiosResponse } from 'axios';

import { AuthApiService } from './api.service';

export type User = {
  id: number;
  username: string;
  displayName: string;
  admin: boolean;
};

export const getUserApi = async (): Promise<AxiosResponse<User>> => await AuthApiService.get('/users/self');

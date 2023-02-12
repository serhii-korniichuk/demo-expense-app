import api from 'libraries/axios';
import { IApiResponse } from 'types';

import {
  ISelfResponse,
  ILogin,
  ILoginResponse,
  IRegister,
  IRegisterResponse,
} from './Auth.types';

export const AuthRequests = {
  getSelf(): Promise<IApiResponse<ISelfResponse>> {
    return api.get<ISelfResponse>('/users/self');
  },

  login(data: ILogin): Promise<IApiResponse<ILoginResponse>> {
    return api.post<ILoginResponse>('/auth/login', data);
  },

  register(data: IRegister): Promise<IApiResponse<IRegisterResponse>> {
    return api.post<IRegisterResponse>('/auth/register', data);
  },

  logout(): Promise<void> {
    return api.get('/auth/logout');
  },
};

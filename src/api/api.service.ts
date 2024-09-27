/* eslint-disable @typescript-eslint/naming-convention */
import axios from 'axios';
import { lsHelper } from '../utils/ls-helper';

const baseURL = 'https://expa.fly.dev';

export const ApiService = axios.create({ baseURL });

export const AuthApiService = axios.create({
  baseURL,
  headers: {},
});

AuthApiService.interceptors.request.use((config) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  config!.headers!.Authorization = `Bearer ${lsHelper('token').getValue()}`;

  return config;
});

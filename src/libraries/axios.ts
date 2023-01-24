/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, {
  AxiosResponse,
  AxiosError,
  AxiosRequestHeaders,
  AxiosRequestConfig,
} from 'axios';

import { LocalStorage } from 'utils/local-storage';
import { errorNotification } from 'utils/notification';

declare module 'axios' {
  interface AxiosResponse<T = any> {
    response: T;
    error: any;
  }
  interface AxiosError {
    error: any;
  }
}

const { REACT_APP_API_URL } = process.env;

export const getAuthHeader = () => {
  const accessToken: string = LocalStorage.get('accessToken') || '';

  return accessToken ? { Authorization: `Bearer ${accessToken}` } : {};
};

const createApiInstance = () => {
  const apiConfig = {
    baseURL: REACT_APP_API_URL,
  };

  const api = axios.create(apiConfig);

  api.interceptors.request.use(
    (options: AxiosRequestConfig): AxiosRequestConfig => {
      if (!options?.headers?.Authorization) {
        options.headers = {
          ...options.headers,
          ...getAuthHeader(),
        } as AxiosRequestHeaders;
      }

      return options;
    },
    (error) => {
      Promise.reject(error);
    },
  );

  api.interceptors.response.use(
    (response): Promise<AxiosResponse> =>
      Promise.resolve({
        ...response,
        originalResponse: response,
        error: null,
        response: response.data,
      }),
    (error): Promise<AxiosError> => {
      const originalRequest = error.config;
      if (
        error.response.status === 401 &&
        error.config &&
        !error.config._isRetry
      ) {
        originalRequest._isRetry = true;

        try {
          const refreshToken = LocalStorage.get('refreshToken');

          return new Promise((resolve) => {
            axios
              .post(`${REACT_APP_API_URL as string}auth/refresh`, {
                refreshToken,
              })
              .then(({ data }) => {
                const { accessToken } = data;
                LocalStorage.set('accessToken', accessToken);

                api.defaults.headers.common.Authorization = `Bearer ${
                  accessToken as string
                }`;
                originalRequest.headers.Authorization = `Bearer ${
                  accessToken as string
                }`;

                resolve(api(originalRequest));
              })
              .catch(() => {
                delete api.defaults.headers.common.Authorization;

                LocalStorage.removeAll();
              });
          });
        } catch (error) {
          errorNotification(error);
        }
      }

      return Promise.reject(error);
    },
  );

  return api;
};

export default createApiInstance();

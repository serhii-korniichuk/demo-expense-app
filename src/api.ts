import type { AxiosError, AxiosResponse } from 'axios';
import axios from 'axios';
import type {
	AccessTokenPayload,
	LoginPayload,
	RefreshAccessTokenPayload,
	RegisterPayload,
} from './shared/types';

type ResponsePromise<T> = Promise<AxiosResponse<T> | AxiosError<T>>;

interface User {
	id: number;
	username: string;
	displayName: string;
	admin: boolean;
}

const api = axios.create({
	baseURL: 'https://expa.fly.dev',
});

const getAuthConfig = (accessToken: string) => ({
	headers: {
		Authorization: `Bearer ${accessToken}`,
	},
});

export const register = (payload: RegisterPayload): ResponsePromise<User> =>
	api.post('/auth/register', payload);

export const login = (
	payload: LoginPayload
): ResponsePromise<{
	accessToken: string;
	refreshToken: string;
}> => api.post('/auth/login', payload);

export const refreshAccessToken = (
	payload: RefreshAccessTokenPayload
): ResponsePromise<{
	accessToken: string;
}> => api.post('/auth/refresh', payload);

export const logout = ({ accessToken }: AccessTokenPayload): ResponsePromise<{}> =>
	api.get('/auth/logout', getAuthConfig(accessToken));

export const getAuthUser = ({ accessToken }: AccessTokenPayload): ResponsePromise<User> =>
	api.get('/users/self', getAuthConfig(accessToken));

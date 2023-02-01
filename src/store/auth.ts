/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-param-reassign */

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import type { AxiosError, AxiosResponse } from 'axios';
import {
	register as apiRegister,
	login as apiLogin,
	logout as apiLogout,
	refreshAccessToken as apiRefreshAccessToken,
} from '../api';
import { AuthType } from '../shared/types';
import type { LoginPayload, RefreshAccessTokenPayload, RegisterPayload } from '../shared/types';
import type { RootState } from './store';
import { INTERNAL_ERROR_MESSAGE } from '../shared/constants';

interface AuthState {
	authType: AuthType;
	accessToken: string | null;
	refreshToken: string | null;
	errors: UserError[];
}

interface ErrorResponsePayload {
	statusCode?: number;
}

export interface UserError {
	id: string;
	title: string;
	description: string;
}

export const getUserError = (title: string, description: string): UserError => ({
	id: _.uniqueId('user-error'),
	title,
	description,
});

export const register = createAsyncThunk(
	'auth/registerStatus',
	async (payload: RegisterPayload, { rejectWithValue }) => {
		try {
			const { data } = (await apiRegister(payload)) as AxiosResponse;
			return data;
		} catch (err) {
			return rejectWithValue({ statusCode: (err as AxiosError).response?.status });
		}
	}
);

export const login = createAsyncThunk(
	'auth/loginStatus',
	async (payload: LoginPayload, { rejectWithValue }) => {
		try {
			const { data } = (await apiLogin(payload)) as AxiosResponse;
			return data;
		} catch (err) {
			return rejectWithValue({ statusCode: (err as AxiosError).response?.status });
		}
	}
);

export const logout = createAsyncThunk(
	'auth/logoutStatus',
	async (_payload, { getState }) => {
		await apiLogout({ accessToken: (getState() as RootState).auth.accessToken as string });
	},
	{
		condition: (_payload, { getState }) => {
			if (!(getState() as RootState).auth.accessToken) {
				return false;
			}
		},
	}
);

export const refreshAccessToken = createAsyncThunk(
	'auth/refreshAccessTokenStatus',
	async (payload: RefreshAccessTokenPayload) => {
		const { data } = (await apiRefreshAccessToken(payload)) as AxiosResponse;
		return data;
	}
);

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		authType: AuthType.SIGN_UP,
		refreshToken: null,
		accessToken: null,
		errors: [],
	} as AuthState,
	reducers: {
		changeAuthType: (state, { payload: { type } }: { payload: { type: AuthType } }) => {
			state.authType = type;
		},
		setError: (
			state,
			{ payload: { title, description } }: { payload: { title: string; description: string } }
		) => {
			state.errors.push(getUserError(title, description));
		},
		unsetError: (state, { payload: { id: errorId } }: { payload: { id: string } }) => {
			state.errors = state.errors.filter(({ id }) => id !== errorId);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(register.fulfilled, (state) => {
				state.authType = AuthType.SIGN_IN;
			})
			.addCase(register.rejected, (state, { payload }) => {
				state.errors.push(
					getUserError(
						'Sign up is failed',
						(payload as ErrorResponsePayload).statusCode === 409
							? 'This username is busy. Please, try some other one'
							: INTERNAL_ERROR_MESSAGE
					)
				);
			})
			.addCase(login.fulfilled, (state, { payload: { accessToken, refreshToken } }) => {
				state.accessToken = accessToken;
				state.refreshToken = refreshToken;
			})
			.addCase(login.rejected, (state, { payload }) => {
				state.errors.push(
					getUserError(
						'Sign in is failed',
						(payload as ErrorResponsePayload).statusCode === 401
							? 'Invalid password or user name'
							: INTERNAL_ERROR_MESSAGE
					)
				);
			})
			.addCase(refreshAccessToken.fulfilled, (state, { payload: { accessToken } }) => {
				state.accessToken = accessToken;
			})
			.addMatcher(
				({ type }) =>
					type === 'auth/logoutStatus/fulfilled' || type === 'auth/logoutStatus/rejected',
				(state) => {
					state.accessToken = null;
					state.refreshToken = null;
				}
			);
	},
});

export const { changeAuthType, setError, unsetError } = authSlice.actions;
export const { reducer: authReducer } = authSlice;

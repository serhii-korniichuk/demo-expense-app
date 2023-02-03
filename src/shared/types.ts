export enum AuthType {
	SIGN_IN = 'Sign in',
	SIGN_UP = 'Sign up',
}

export interface RegisterPayload {
	displayName: string;
	username: string;
	password: string;
}

export interface LoginPayload {
	username: string;
	password: string;
}

export interface RefreshAccessTokenPayload {
	refreshToken: string;
}

export interface AccessTokenPayload {
	accessToken: string;
}

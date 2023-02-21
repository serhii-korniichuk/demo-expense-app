import { User } from '../types/User';
import { client } from '../utils/fetchClient';
import { ENDPOINTS } from './endpoints';
import { SignInToken } from '../types/SignInToken';

export const signUpUser = (user: User) => {
    return client.post(ENDPOINTS.register, user);
};

export const signInUser = (username: string, password: string) => {
    return client.post<SignInToken>(ENDPOINTS.login, {username, password});
};

export const logOutUser = () => client.get(ENDPOINTS.logout);

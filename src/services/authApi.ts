import axios from 'axios';
import { IUser } from '../types/User';

axios.defaults.baseURL = 'https://incode-backend-dev.herokuapp.com';

export const signUp = async (user: IUser, token: string) => {
  const res = await axios.post('/auth/register', user, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const signIn = async (user: IUser, token: string) => {
  const res = await axios.post('/auth/login', user, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const logOut = async (token: string) => {
  const res = await axios.get('/auth/logout', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

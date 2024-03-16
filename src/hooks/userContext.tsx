import React, { createContext, useContext, useState } from 'react';
import * as API from '../services/authApi';
import { toast } from 'react-toastify';
import { IContext } from '../types/Context';
import { IUser } from '../types/User';

interface IProps {
  children: React.ReactNode;
}

const UserContext = createContext<IContext | null>(null);

export const useUser = () => useContext(UserContext) as IContext;

const parseToken = () => {
  const user = localStorage.getItem('user');
  if (!user) return;
  const parsedUser = JSON.parse(user);
  if (!parsedUser.token) {
    return null;
  }
  return parsedUser.token;
};

const parseStatus = (): boolean => {
  const user = localStorage.getItem('user');
  if (!user) return false;
  const parsedUser = JSON.parse(user);
  if (!parsedUser.token) {
    return false;
  }
  return true;
};

export const UserProvider: React.FC<IProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(parseStatus);
  const [token, setToken] = useState(parseToken);

  const register = async (user: IUser) => {
    try {
      const res = await API.signUp(user, token);
      setIsLoggedIn(true);
      setToken(res.token);
      toast.success('You registered succesfull, please log in!');
    } catch (error: any) {
      toast.error(`Something went wrong: ${error.response.data.message}`);
    }
  };

  const logIn = async (user: IUser) => {
    try {
      const res = await API.signIn(user, token);
      setIsLoggedIn(true);
      setToken(res.accessToken);
      localStorage.setItem(
        'user',
        JSON.stringify({ isLoggedIn: true, token: res.accessToken })
      );
      toast.success('You log in succesfull, enjoy!');
    } catch (error: any) {
      toast.error(`Something went wrong: ${error.response.data.message}`);
    }
  };

  const logOut = async () => {
    try {
      await API.logOut(token);
      setIsLoggedIn(false);
      setToken(null);
      localStorage.setItem(
        'user',
        JSON.stringify({ isLoggedIn: false, token: null })
      );
      toast.success('You log out succesfull, have a good day!');
    } catch (error: any) {
      toast.error(`Something went wrong: ${error.response.data.message}`);
    }
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, logIn, logOut, register }}>
      {children}
    </UserContext.Provider>
  );
};

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logout } from '../../api/requests';
import { Loader } from '../Loader';
import style from './logoutButton.module.scss';
import {  toast } from 'react-toastify';

export const LogoutButton = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const successNotif = () => {
    return toast.success('Logout successful!', {
      position: 'top-center',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const errorNotif = (message: string) => {
    return toast.error(message, {
      position: 'top-center',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await Logout();
      localStorage.clear();
      navigate('/signIn');
      successNotif();
    }
    catch (error) {
      errorNotif(error.response.data.message);
      if (error.response.status === 401) {
        navigate('/signIn');
        localStorage.clear();
      }
    }
    finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className={style.btn__wrapper}>
        <button className={style.btn} onClick={handleLogout}>{isLoading ? <Loader /> : 'Log Out'}</button>
      </div>
    </>
  );
};
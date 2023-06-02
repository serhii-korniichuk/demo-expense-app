import React from 'react';
import { Link } from 'react-router-dom';
import style from './signInLink.module.scss';

export const SignInLink: React.FC = () => {
  return (
    <div className={style.sign__in_row}>
      <p className={style.sign__in_text}>I have an account</p>
      <Link to="/signIn" className={style.sign__in_link}>Go to Sign in</Link>
    </div>
  );
};
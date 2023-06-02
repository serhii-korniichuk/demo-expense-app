import React from 'react';
import { Link } from 'react-router-dom';
import style from './signUpLink.module.scss';

export const SignUpLink: React.FC = () => {
  return (
    <div className={style.sign__in_row}>
      <p className={style.sign__in_text}>Don`t have account yet?</p>
      <Link to="/signUp" className={style.sign__in_link}>Go to Sign up</Link>
    </div>
  );
};
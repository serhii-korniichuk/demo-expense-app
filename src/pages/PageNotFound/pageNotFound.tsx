import React from 'react';
import { Link } from 'react-router-dom';
import style from './pageNotFound.module.scss';

export const PageNotFound = () => {
  return (
    <div className={style.container}>
      <Link className={style.link} to="/signIn">Back to Login</Link>
      <h1 className={style.title}>Page not found</h1>
      <img src="https://media.giphy.com/media/g01ZnwAUvutuK8GIQn/giphy.gif" alt="img" className={style.image} />
    </div>
  );
};

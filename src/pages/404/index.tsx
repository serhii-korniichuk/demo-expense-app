import React from 'react';
import { Logo } from '../../components';
import classes from './styles.module.scss';

export const Page404 = (): JSX.Element => {
  return (
    <div className={classes.page404}>
      <Logo />
      <div className={classes.header}>
        <h1>404</h1>
      </div>
    </div>
  );
};

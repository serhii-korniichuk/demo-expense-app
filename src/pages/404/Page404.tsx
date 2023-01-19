import React from 'react';
import { Logo } from '../../shared/components';
import classes from './Page404.module.scss';

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

import React from 'react';
import classes from './Logo.module.scss';

export const Logo = (): JSX.Element => {
  return (
    <div className={classes.logoContainer}>
      <h2 className={classes.logoHeader}>InCode</h2>
      <p className={classes.logoLabel}>Finance</p>
    </div>
  );
};

import React from 'react';
import classes from './styles.module.scss';

export const Loader = (): JSX.Element => {
  return <div className={classes.spinner}></div>;
};

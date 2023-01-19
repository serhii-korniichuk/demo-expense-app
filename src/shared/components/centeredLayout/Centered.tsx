import React from 'react';
import classes from './Centered.module.scss';

interface CenteredInterface {
  children: JSX.Element
}

export const Centered = ({ children }: CenteredInterface): JSX.Element => {
  return <div className={classes.centered}>{children}</div>;
};

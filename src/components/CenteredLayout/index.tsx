import React from 'react';
import classes from './styles.module.scss';

import type { ICenteredLayout } from './types';

export const CenteredLayout = ({ children }: ICenteredLayout): JSX.Element => {
  return <div className={classes.centered}>{children}</div>;
};

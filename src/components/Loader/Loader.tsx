import { FC } from 'react';
import classes from './Loader.module.scss';

export const Loader: FC = () => (
  <div className={classes.Loader}>
    <div className={classes.LoaderContent} />
  </div>
);

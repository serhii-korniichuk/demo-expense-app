import { FC } from 'react';
import classes from './Logo.module.scss';

export const Logo: FC = () => {
  return (
    <div>
      <h1 className={classes.title}>
        InCode
      </h1>

      <h3 className={classes.description}>
        Finance
      </h3>
    </div>
  );
};

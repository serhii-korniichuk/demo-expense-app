import React from 'react';
import classes from './Logo.module.css';

export const Logo: React.FC = () => {
  return (
    <div>
      <h1 className={classes.title}>
        InCode
      </h1>

      <h3 className={classes.subtitle}>
        Finance
      </h3>
    </div>
  );
};

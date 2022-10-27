import { FC, ReactNode } from 'react';
import classes from './Button.module.scss';

type Props = {
  width: string;
  isDisabled: boolean;
  children: ReactNode;
};

export const Button: FC<Props> = ({ width, isDisabled, children }) => {
  return (
    <button
      type="submit"
      className={classes.button}
      style={{ width }}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

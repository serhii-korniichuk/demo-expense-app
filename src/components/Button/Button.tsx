import { FC, ReactNode } from 'react';
import classes from './Button.module.scss';

type Props = {
  width: string;
  isDisabled?: boolean;
  children: ReactNode;
  onClick?: () => void;
};

export const Button: FC<Props> = (props) => {
  const {
    width, isDisabled, children, onClick,
  } = props;

  return (
    <button
      type="submit"
      className={classes.button}
      style={{ width }}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

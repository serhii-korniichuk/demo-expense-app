import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment } from '@mui/material';
import React from 'react';

interface ShowPasswordIconPropsInterface {
  statement: boolean
  handleClick: () => void
}

export const ShowPasswordIcon = ({ statement, handleClick }: ShowPasswordIconPropsInterface): JSX.Element => {
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
  };

  return (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={handleClick}
        onMouseDown={handleMouseDownPassword}
      >
        {statement ? <VisibilityOff color="secondary" /> : <Visibility color="secondary" />}
      </IconButton>
    </InputAdornment>
  );
};

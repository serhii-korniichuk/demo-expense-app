import React from 'react';
import style from './formFieldError.module.scss';

type Props = {
  error: string | undefined;
};

export const FormFieldError: React.FC<Props> = ({ error }) => {
  return (
    <div className={style.error}>
      <p>{error}</p>
    </div>
  );
};
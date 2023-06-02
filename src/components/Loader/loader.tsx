import React from 'react';
import style from './loader.module.scss';

export const Loader = () => {
  return (
    <div className={style.lds_ring}><div></div><div></div><div></div><div></div></div>
  );
};
import React from 'react';
import { LogoutButton } from '../../components/LogoutButton/logoutButton';
import style from './homePage.module.scss';

export const HomePage: React.FC = () => {
  return (
    <div className={style.container}>
      <h3 className={style.logo}>InCode</h3>
      <h5 className={style.subLogo}>Finance</h5>
      <div className={style.congratulation}>
        <h2 className={style.title}>Congratulations</h2>
        <p className={style.content}>
          Now you are on the main page. Soon we will provide you with detailed feedback on the result of your work
        </p>
      </div>
      <LogoutButton />
      <div className={style.footer__img_wrap}>
        <img className={style.footer__img} src="./images/Vector.png" alt="footer img" />
      </div>
    </div>
  );
};

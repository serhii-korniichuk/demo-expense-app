import React from 'react';
import {logOutUser} from '../../api/manageUserAccess';
import {Logo} from '../../components/logo/Logo';
import classes from './HomePage.module.css';
import starsImage from '../../images/stars.svg';
import peopleImage from '../../images/team.png';

interface Props {
  setLogInStatus: (arg: boolean) => void
}

export const HomePage: React.FC<Props> = (props) => {
  const { setLogInStatus } = props;

  const clearToken = () => {
    localStorage.setItem('accessToken', '');
    localStorage.setItem('refreshToken', '');
  }

  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        window.alert("You successfully logged out!");
      })
      .catch(error => console.log(error))
      .finally(() => {
        clearToken();
        setLogInStatus(false);
      })
  }

  return (
    <div className={classes.container}>
      <Logo />
      <div className={classes.content}>
        <div className={classes.GZ}>
          <h2 className={classes.GZ_title}>
            Congratulations
          </h2>

          <img
            className={classes.GZ_img}
            src={starsImage}
            alt="congratulations"
          />
        </div>

        <p className={classes.message}>
          Now you are on the main page.
          Soon we will provide you with detailed feedback on the result of your work
        </p>

        <button
          className={classes.button}
          onClick={handleLogOut}
        >
          Log Out
        </button>

        <img
          src={peopleImage}
          alt="people"
          className=''
        />
      </div>
    </div>
  );
};

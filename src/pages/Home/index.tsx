import { Button } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAction } from '../../hooks';
import { getSelf, logOut } from '../../api/api';
import { clearUserData, setUser } from '../../state/userReducer';
import { userSelector } from '../../state/selectors';
import { Loader, Logo } from '../../components';
import classes from './styles.module.scss';
import vector from '../../assets/vector.png';
import decor from './../../assets/decor.png';

export const Home: FC = () => {
  const { user } = useSelector(userSelector);
  const [shouldRedirect, setShouldRedirect] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(!user);
  const [boundedLogOut, boundedSetUser] = useAction([clearUserData, setUser]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      getSelf()
        .then(({ data }) => {
          boundedSetUser(data);
        })
        .catch((error) => {
          console.error(error.response.data.message);
          setShouldRedirect(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, []);

  const handleLogOut = (): void => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      logOut()
        .then(() => {
          boundedLogOut();
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
        })
        .then(() => {
          navigate('/auth');
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      boundedLogOut();
      navigate('/auth');
    }
  };

  return (
    <>
      {isLoading
        ? (
        <Loader />
          )
        : shouldRedirect
          ? (
        <Navigate to="/auth" replace />
            )
          : (
        <div className={classes.homeContainer}>
          <Logo />
          <div className={classes.congratulationsContainer}>
            <div className={classes.congratulationsHeaderContainer}>
              <img className={classes.decorContainer} alt="decor" src={decor} />
              <h2>CONGRATULATION</h2>
            </div>
            <p>
              Now you are on the main page. Soon we will provide you with detailed feedback on the
              result of your work
            </p>
            <Button onClick={handleLogOut} variant="contained" color="success">
              Log Out
            </Button>
          </div>
          <img className={classes.vector} alt="vector" src={vector} />
        </div>
            )}
    </>
  );
};

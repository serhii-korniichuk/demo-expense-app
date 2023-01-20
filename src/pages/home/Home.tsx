import { Button } from '@mui/material';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAction } from '../../hooks';
import { getSelf, logOut } from '../../model/api/api';
import { clearUserData, setUser } from '../../model/reducer/user/reducer';
import { userSelector } from '../../model/reducer/user/selector';
import { Loader, Logo } from '../../shared/components';
import classes from './Home.module.scss';
import vector from '../../assets/vector.png';
import decor from './../../assets/decor.png';

let isFirstMount = true;

export const Home: FC = () => {
  const { user } = useSelector(userSelector);
  const [shouldRedirect, setShouldRedirect] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(!user);
  const [boundedLogOut, boundedSetUser] = useAction([clearUserData, setUser]);
  const navigate = useNavigate();

  const getUserOnMount = useCallback(() => {
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

  useEffect(() => {
    if (isFirstMount) {
      getUserOnMount();
    }
    return () => {
      isFirstMount = false;
    };
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

  const component = (
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
  );

  const render = shouldRedirect ? <Navigate to="/auth" replace /> : component;

  return <>{isLoading ? <Loader /> : render}</>;
};

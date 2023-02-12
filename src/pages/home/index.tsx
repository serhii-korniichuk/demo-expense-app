import { FC, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Typography } from '@mui/material';

import { AppDispatch } from 'store';
import { logout } from 'store/slices/user';
import { selectUser } from 'store/selectors/user';

import { errorNotification } from 'utils/notification';

import { Logo } from 'components/common/logo';

import homeCongratulationsImg from 'assets/decor/home-congratulations.png';

import styles from './home.module.scss';

export const Home: FC = () => {
  const { isLoading } = useSelector(selectUser);
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      await dispatch(logout()).unwrap();
    } catch (error) {
      errorNotification(error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <Logo />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mt={13.625}
      >
        <Box className={styles.rightTopConfetti}>
          <Typography variant="h2" color="text.primary">
            Congratulations
          </Typography>
        </Box>
        <Box mt={6} textAlign="center" maxWidth="466px">
          <Typography variant="h5" color="text.primary">
            Now you are on the main page. Soon we will provide you with detailed
            feedback on the result of your work
          </Typography>
        </Box>
        <Box mt={6}>
          <Button
            id="logOut"
            variant="contained"
            color="primary"
            disabled={isLoading}
            onClick={handleLogout}
          >
            Log Out
          </Button>
        </Box>
        <Box mt={9}>
          <img src={homeCongratulationsImg} alt="Home congratulations" />
        </Box>
      </Box>
    </div>
  );
};

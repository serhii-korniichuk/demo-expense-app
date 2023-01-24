import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

import { routes } from 'constants/routes';

import { Logo } from 'components/common/logo';

import styles from './page404.module.scss';

export const Page404: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Logo />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="70vh"
      >
        <Box>
          <Typography variant="h2" color="text.primary">
            404
          </Typography>
        </Box>
        <Box mt={6}>
          <Link to={routes.home}>Home</Link>
        </Box>
      </Box>
    </div>
  );
};

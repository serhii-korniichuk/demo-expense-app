import { FC } from 'react';

import { Box } from '@mui/material';

import { Logo } from 'components/common/logo';
import { AuthForm } from 'components/auth-form';

import styles from './auth.module.scss';

export const Auth: FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <div className={styles.wrapper}>
        <Logo />
        <AuthForm />
      </div>
    </Box>
  );
};

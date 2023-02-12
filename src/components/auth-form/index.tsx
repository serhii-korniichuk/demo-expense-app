import { FC, useState, useCallback } from 'react';
import { Box, Typography } from '@mui/material';

import { SignIn } from './sign-in';
import { SignUp } from './sign-up';

import { ToggleForm } from './toggle-form';

export const AuthForm: FC = () => {
  const [haveAccount, setHaveAccount] = useState(true);

  const handleHaveAccount = useCallback(() => {
    setHaveAccount((prevHaveAccount) => !prevHaveAccount);
  }, []);

  return (
    <div>
      <Box mt={9}>
        <Typography variant="h1" color="text.primary">
          {haveAccount ? 'Sign In' : 'Sign Up'}
        </Typography>
      </Box>
      <form>{haveAccount ? <SignIn /> : <SignUp />}</form>
      <ToggleForm haveAccount={haveAccount} onClick={handleHaveAccount} />
    </div>
  );
};

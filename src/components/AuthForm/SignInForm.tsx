import { FC, useState } from 'react';
import { Button } from '../Button';
import { Loader } from '../Loader';
import { TextField } from '../TextField';
import classes from './AuthForm.module.scss';

export const SignInForm: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const isDisabled = !userName || !password || isLoading;

  return (
    <form>
      <TextField
        value={userName}
        onChange={setUserName}
        label="User Name"
        inputType="text"
        placeholder="Example123"
        isDisabled={isLoading}
      />

      <TextField
        value={password}
        onChange={setPassword}
        label="Password"
        inputType="password"
        placeholder="***************"
        isDisabled={isLoading}
      />

      <div className={classes.buttonWrapper}>
        <Button width="100%" isDisabled={isDisabled}>
          {isLoading ? <Loader /> : 'Sign In'}
        </Button>
      </div>
    </form>
  );
};

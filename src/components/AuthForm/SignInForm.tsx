import { FC, FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { Button } from '../Button';
import { Loader } from '../Loader';
import { TextField } from '../TextField';
import classes from './AuthForm.module.scss';
import { loginUser } from '../../api/auth';
import { useAuth } from '../AuthContext';

export const SignInForm: FC = () => {
  const { setToken } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const isDisabled = !userName || !password || isLoading;

  const clearForm = () => {
    setIsLoading(false);
    setUserName('');
    setPassword('');
  };

  const handleUserLogin = (event: FormEvent) => {
    event.preventDefault();

    if (!userName.trim().length || password.trim().length < 8) {
      toast.error('Password should be more than 8 characters');

      return;
    }

    setIsLoading(true);

    loginUser(userName, password)
      .then(response => {
        toast.success('Successfully logged in');
        clearForm();
        setToken(response.accessToken);
      })
      .catch((error) => {
        switch (error.message) {
          case '401':
            toast.error('Please, provide valid password and username');
            break;
          case '404':
            toast.error('Current user not found');
            break;
          default:
            toast.error('Something went wrong');
            break;
        }

        setIsLoading(false);
      });
  };

  return (
    <form onSubmit={handleUserLogin}>
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

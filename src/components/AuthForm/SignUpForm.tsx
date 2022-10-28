import { FC, FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { Button } from '../Button';
import { Loader } from '../Loader';
import { TextField } from '../TextField';
import classes from './AuthForm.module.scss';
import { registerUser } from '../../api/auth';

export const SignUpForm: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  const isDisabled = !userName || !password || isLoading || !fullName || !confirmedPassword;

  const clearForm = () => {
    setFullName('');
    setUserName('');
    setPassword('');
    setConfirmedPassword('');
  };

  const inputLength = (input: string) => input.trim().length;

  const handleCreateNewUser = (event: FormEvent) => {
    event.preventDefault();

    if (
      !inputLength(fullName) || !inputLength(userName)
      || inputLength(password) < 8 || inputLength(confirmedPassword) < 8
    ) {
      toast.error('Password should be more than 8 characters');

      return;
    }

    if (password !== confirmedPassword) {
      toast.error('Password and confirmed password should be the same');

      return;
    }

    setIsLoading(true);

    registerUser({
      displayName: fullName,
      username: userName,
      password,
    })
      .then(() => {
        clearForm();
        toast.success('User was successfully created, please, log in');
      })
      .catch((error) => {
        switch (error.message) {
          case '409':
            toast.error('Username is already used by another user');
            break;
          default:
            toast.error('Something went wrong');
            break;
        }

        setIsLoading(false);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <form onSubmit={handleCreateNewUser}>
      <TextField
        value={fullName}
        onChange={setFullName}
        label="Full Name"
        inputType="text"
        placeholder="Example Name"
        isDisabled={isLoading}
      />

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

      <TextField
        value={confirmedPassword}
        onChange={setConfirmedPassword}
        label="Confirm Password"
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

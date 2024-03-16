import {
  Title,
  Label,
  Input,
  Button,
  Link,
  Text,
  EyeOff,
  EyeOn,
} from './Form.styled';
import { useUser } from '../../hooks/userContext';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { IFormElements } from '../../types/FormElements';

export const Form: React.FC = () => {
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const [isShowPass, setIsShowPass] = useState<boolean>(false);
  const { logIn, register } = useUser();

  const onFormSumbitHandler = (e: React.FormEvent): any => {
    const formInfo = (e.target as HTMLFormElement).elements as IFormElements;
    e.preventDefault();
    const username = formInfo.username.value;
    const password = formInfo.password.value;
    if (isRegistered) {
      const displayName = formInfo.displayName.value;
      const confpassword = formInfo.confpassword.value;
      if (password !== confpassword) {
        toast.error('Your passwords are not equal');
        return;
      }
      register({
        password,
        username,
        displayName,
      });
      setIsRegistered(true);
    } else {
      logIn({
        password,
        username,
      });
    }
    (e.target as HTMLFormElement).reset();
  };

  const onClickIconToggle = () => {
    setIsShowPass(!isShowPass);
  };

  const onClickHandler = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    setIsRegistered(!isRegistered);
  };
  return (
    <>
      <form onSubmit={onFormSumbitHandler}>
        <Title>{isRegistered ? 'Sign Up' : 'Sign In'}</Title>
        {isRegistered && (
          <Label>
            Full Name
            <Input
              type="text"
              name="displayName"
              placeholder="Example Name"
              required
            />
          </Label>
        )}
        <Label>
          User Name
          <Input
            type="text"
            name="username"
            placeholder="Example123"
            required
          />
        </Label>
        <Label>
          Password
          <Input
            type={isShowPass ? 'text' : 'password'}
            name="password"
            placeholder={isShowPass ? 'Your password' : '***************'}
            required
          />
          {isShowPass ? (
            <EyeOn onClick={onClickIconToggle} />
          ) : (
            <EyeOff onClick={onClickIconToggle} />
          )}
        </Label>
        {isRegistered && (
          <Label>
            Confirm Password
            <Input
              type={isShowPass ? 'text' : 'password'}
              name="confpassword"
              placeholder={isShowPass ? 'Your password' : '***************'}
              required
            />
            {isShowPass ? (
              <EyeOn onClick={onClickIconToggle} />
            ) : (
              <EyeOff onClick={onClickIconToggle} />
            )}
          </Label>
        )}
        <Button type="submit">{isRegistered ? 'Sign Up' : 'Sign In'}</Button>
      </form>
      <Text>
        {isRegistered ? 'I have an account. ' : 'Don’t have account yet? '}
        <Link onClick={onClickHandler}>
          {isRegistered ? 'Go to Sign in' : 'New Account'}
        </Link>
      </Text>
    </>
  );
};

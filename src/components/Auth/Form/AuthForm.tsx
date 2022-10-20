import React, { useEffect, useState } from 'react';
import { Logo } from '../../Logo';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';

export type Props = {
  setAccessToken:(v: string) => void,
};

export const AuthForm: React.FC<Props> = ({ setAccessToken }) => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [needToRegister, setNeedToRegister] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <div className='incodeApp'>
      <Logo />
      {needToRegister 
        ? <SignUp 
          loading={loading}
          setLoading={setLoading}
          needToRegister={needToRegister}
          setNeedToRegister={setNeedToRegister}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          fullName={fullName}
          setFullName={setFullName}
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
        />
        : <SignIn
          loading={loading}
          setLoading={setLoading}
          setAccessToken={setAccessToken}
          needToRegister={needToRegister}
          setNeedToRegister={setNeedToRegister}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          setFullName={setFullName}
          setConfirmPassword={setConfirmPassword}
        />
      }
    </div>
    );
  };

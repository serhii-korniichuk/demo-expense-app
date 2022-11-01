import React, { useState } from 'react';
import classNames from'classnames';
import { login, setToken } from '../actions/user';
import { ErrorNotification } from './ErrorNotifications';
import { textError } from './types/textError';

type Props = {
  setSignInStatus: (value: boolean) => void;
  signInStatus: boolean;
};

export const SignIn: React.FC<Props> = ({ 
  setSignInStatus, 
}) => {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [error, setError] = useState('');
  const changeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const changeUserPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserPassword(event.target.value);
  };

  const changeSignInStatus = () => { 
    setSignInStatus(false);
  };

  const changePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const handleSignIn = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!userName.trim() || !userPassword.trim()) {
      setError(textError.data);
  
      return;
    }

    await login(userName, userPassword).then((data) => {
      if (data.error) {
        setError(textError.loginPassError);

        return;
      } else {
        setToken(data.accessToken);
        window.location.href = '/';
      }
    }); 
  };

  return (
    <div>
      <h1 className='form__text'>
        Sign In
      </h1>
      <form 
        method='post'
        className='form__fields'
      >
        <div
          className='form__section'
        >
          <label 
            className="form__label"
            htmlFor="user-name"
          >
            User Name
            <input
              name='user-name'
              type='text'
              className='form__input'
              placeholder='Example123'
              required
              value={userName}
              onChange={changeUserName}
            />
          </label>
        </div>

        <div
          className='form__section'
        >
          <label 
            className="form__label"
            htmlFor="user-password"
          >
            Password
            <input
              name='user-password'
              type={
                passwordVisibility
                  ? 'text'
                  : 'password'
              }
              className='form__input'
              placeholder='***************'
              required
              value={userPassword}
              onChange={changeUserPassword}
              minLength={5}
            />
            <div className="password__visibility">
              <i
                onClick={changePasswordVisibility}
                className={classNames(
                  'far', {
                    'fa-eye': passwordVisibility,
                  },
                  { 'fa-eye-slash': !passwordVisibility },
                )}
              />
            </div>
          </label>
        </div>

        <button
          type='submit'
          className='form__button'
          onClick={handleSignIn}
        >
          Sign in
        </button>
        {error.length > 0 && ( 
          <ErrorNotification 
            error={error}
            setError={setError}
          />
        )}
        <div className='form__switch'>
          <div
            className='form__switch--text'
          >
            Don’t have account yet? 
          </div>
          <label
            className='form__switch--button'
            onClick={changeSignInStatus}
          >
            New Account
          </label>
        </div>
      </form>
      
    </div>
  );
};

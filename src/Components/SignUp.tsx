import React, { useState } from 'react';
import classNames from'classnames';
import { registration } from '../actions/user';
import { ErrorNotification } from './ErrorNotifications';
import { textError } from './types/textError';

type Props = {
  setSignInStatus: (value: boolean) => void;
  signInStatus: boolean;
};

export const SignUp: React.FC<Props> = ({ 
  setSignInStatus, 
}) => {
  const [userName, setUserName] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');
  const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);
  const [fullName, setFullName] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [confirmPassVisib, setConfirmPassVisib] = useState<boolean>(false);
  const [error, setError] = useState('');
  
  const changeFullName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(event.target.value);
  };
  
  const changeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const changeUserPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserPassword(event.target.value);
  };

  const changeConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  const changeSignInStatus = () => { 
    setSignInStatus(true);
  };

  const changePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const changeConfirmPassVisib = () => {
    setConfirmPassVisib(!confirmPassVisib);
  };

  const clearFields = () => {
    setFullName('');
    setUserName('');
    setUserPassword('');
    setConfirmPassword('');
    setConfirmPassVisib(false);
    setPasswordVisibility(false);
  };

  const handleRegistration = async (event: React.FormEvent) => {
    event.preventDefault();

    if (userName.trim().length === 0 || fullName.trim().length === 0 
    || userPassword.trim().length === 0) {
      setError(textError.data);

      return;
    }

    if (userPassword.length < 8) {
      setError(textError.passLength);

      return;
    }

    if (userPassword !== confirmPassword) {
      setError(textError.confirmPass);
      setConfirmPassword('');

      return;
    }

    await registration(fullName, userName, userPassword).then((data) => {
      if (data.error) {
        setError(textError.serverError);
      } else {
        alert('You have successfully registered! Use your user name and password to sign in');
        setSignInStatus(true);
        clearFields();
      }
    });
  };

  return (
    <div>
      <h1 className='form__text'>
        Sign Up
      </h1>
      <form 
        className='form__fields'
        action="">

        <div
          className='form__section'
        >
          <label 
            className="form__label"
            htmlFor="user-name"
          >
            Full name
            <input
              name='user-name'
              type='text'
              className='form__input'
              placeholder='Example Name'
              autoComplete='off'
              required
              value={fullName}
              onChange={changeFullName}
            />
          </label>
        </div>

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
              autoComplete='off'
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
            <div className="password__visibility--signup">
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

        <div
          className='form__section'
        >
          <label 
            className="form__label"
            htmlFor="user-password"
          >
            Confirm Password 
            <input
              name='user-password'
              type={
                confirmPassVisib
                  ? 'text'
                  : 'password'
              }
              className='form__input'
              placeholder='***************'
              required
              value={confirmPassword}
              onChange={changeConfirmPassword}
              minLength={8}
            />
            <div className="password__visibility">
              <i
                onClick={changeConfirmPassVisib}
                className={classNames(
                  'far', {
                    'fa-eye': confirmPassVisib,
                  },
                  { 'fa-eye-slash': !confirmPassVisib },
                )}
              />
              
            </div>
          </label>
          
        </div>

 
        <button
          type='submit'
          className='form__button'
          onClick={handleRegistration}
        >
          Sign Up
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
            I have an account.  
          </div>
          <label
            className='form__switch--button'
            onClick={changeSignInStatus}
          >
            Go to Sign in
          </label>
        </div>
      </form>
      
    </div>
  );
};

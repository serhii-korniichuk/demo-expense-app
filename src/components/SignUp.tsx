/* eslint-disable */

import classNames from 'classnames';
import React, { useState } from 'react';
import { setTimeout } from 'timers';
import { createUser } from './api';

type Props = {
  setSignCheck: (sign: boolean) => void;
};

export const SignUp: React.FC<Props> = ({ setSignCheck }) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [password, setPassword] = useState('');
  const [visiblePass, setVisiblePass] = useState(false);
  const [visiblePass1, setVisiblePass1] = useState(false);
  const [confirmPass, setconfirmPass] = useState('');
  const [success, setSuccess] = useState('');

  const handleSingUp = async (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== confirmPass) {
      setError('confirm password is invalid');
      setconfirmPass('');

      return;
    }

    try {
      await createUser(username, password, displayName);
      setSuccess('Successful registration. Sign in to your account');
      setTimeout(() => setSignCheck(true), 3000);
    } catch {
      setError('Can not add user');
    }

    setconfirmPass('');
    setPassword('');
  };

  const handleClick = (func: (val: boolean) => void, val: boolean) => {
    func(!val);
  };

  return (
    <form
      className="form"
      onSubmit={handleSingUp}
    >
      <h1 className="form__title ">
        Sign Up
      </h1>

      <div className="field">

        <div>

          <label className="field__label">
            Full Name

            <input
              type="name"
              className="field__inputs"
              placeholder="Example123"
              value={displayName}
              required
              onChange={e => setDisplayName(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label className="field__label">
            User Name

            <input
              type="username"
              className="field__inputs"
              placeholder="Example123"
              value={username}
              required
              onChange={e => setUsername(e.target.value)}
            />
          </label>
        </div>

        <div className="password">
          <label className="field__label">
            Password
            <input
              className="field__inputs"
              type={!visiblePass
                ? 'password'
                : 'text'}
              placeholder="********"
              required
              minLength={8}
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          
            <span className="password__icon">
            <i
              onClick={() => handleClick(setVisiblePass, visiblePass)}
              className={classNames(
                'far', {
                  'fa-eye': visiblePass,
                },
                { 'fa-eye-slash': !visiblePass },
              )}
            />
            </span>
          </label>
        </div>

        <div className="password">
          <label className="field__label" htmlFor="user-email">
            Confirm Password

            <input
              type={!visiblePass1
                ? 'password'
                : 'text'}
              className="field__inputs"
              placeholder="*********"
              value={confirmPass}
              required
              onChange={e => setconfirmPass(e.target.value)}
            />

            <span className="password__icon">
              <i
                onClick={() => handleClick(setVisiblePass1, visiblePass1)}
                className={classNames(
                  'far', {
                    'fa-eye': visiblePass1,
                  },
                  { 'fa-eye-slash': !visiblePass1 },
                )}
              />
            </span>
          </label>
        </div>

        <p className="success">{success}</p>
        {!success && (
          <p className="error">{error}</p>
        )}

        <button
          type="submit"
          className="button button__up"
        >
          Sign Up
        </button>
        <div className="form__bottom">
          I have an account.
          <label
            className="form__link"
            onClick={() => setSignCheck(true)}
          >
            Go to Sign in
          </label>
        </div>
      </div>
    </form>
  );
};

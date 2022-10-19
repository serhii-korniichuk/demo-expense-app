/* eslint-disable */

import classNames from 'classnames';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from './api';

type Props = {
  setSignCheck: (sign: boolean) => void;

};

export const SignIn: React.FC<Props> = ({ setSignCheck }) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const [visiblePass, setVisiblePass] = useState(false);

  const handleClick = () => {
    setVisiblePass(!visiblePass);
  };
  const redirect = useNavigate();

  const handleSingIn = async (event: React.FormEvent) => {
    event.preventDefault();

    let token;

    try {
      await loginUser(username, password)
        .then(() => {
          redirect('/home');
        });
      const x = loginUser(username, password);

      x.then((res) => {
        token = (res);

        return token;
      });
      localStorage.setItem('login', JSON.stringify(token));

      localStorage.getItem('login');
    } catch {
      setError('Username or password are invalid');
    }

    setPassword('');
  };

  return (
    <form
      onSubmit={handleSingIn}
    >
      <h1 className="form__title ">
        Sign In
      </h1>

      <div className="field">
        <div>
          <label
            className="field__label"
            htmlFor="user-email"
          >
            User Name

            <input
              type="name"
              className="field__inputs"
              placeholder="Example123"
              value={username}
              required
              onChange={e => setUsername(e.target.value)}
            />
          </label>

        </div>

        <div className="password">
          <label
            className="field__label"
            htmlFor="user-name"
          >
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
          </label>
          <span className="password__icon">
            <i
              onClick={handleClick}
              className={classNames(
                'far', {
                  'fa-eye': visiblePass,
                },
                { 'fa-eye-slash': !visiblePass },
              )}
            />
          </span>
        </div>
      </div>

      <div className="field">
        <p className="error">{error}</p>

        <button
          type="submit"
          className="button"
        >
          Sign In
        </button>
        <div className="form__bottom">
          Don’t have account yet?
          <label
            className="form__link"
            onClick={() => setSignCheck(false)}
          >
            New Account
          </label>
        </div>
      </div>
    </form>
  );
};

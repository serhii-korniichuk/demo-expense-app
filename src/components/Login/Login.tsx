import React from "react";
import { login } from "../../api";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import '../Registration/Registration.scss';
import './Login.scss';

export const Login: React.FC = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [inputType, setInputType] = useState('password');

  const clearForm = () => {
    setUserName('');
    setPassword('');
  };

  const navigation = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await login(username, password);

    if (!response.ok) {
      setLoginError(true);
      clearForm();
    } else {
      setLoginError(false);
      clearForm();
      navigation("/home", { replace: true });
      console.log(response);
    }
  };

  const showPassword = () => {
    setInputType('text');
  };

  const hidePassword = () => {
    setInputType('password');
  };

  return (
    <div className="login container">
      <div className="header">
        <div className="header__company">InCode</div>
        <div className="header__spec">Finance</div>
      </div>
      <form
        method="post"
        className="form login__form"
        onSubmit={handleSubmit}
      >
        <div className="form__title">Sign In</div>

        <div className="form__input">
          <label
            className="form__input-title"
            htmlFor="username"
          >
            User Name
          </label>
          <input
            id="username"
            type="text"
            className="form__input-field"
            placeholder="Example123"
            name="username"
            value={username}
            onChange={event => setUserName(event.target.value)}
            required
          />
        </div>

        <div className="form__input">
          <label
            className="form__input-title"
            htmlFor="password"
          >
            Password
          </label>
          <div className="form__input-block">
            <input
              id="password"
              type={inputType}
              className="form__input-field form__input-field--password"
              value={password}
              placeholder="***************"
              name="password"
              onChange={event => setPassword(event.target.value)}
              required
            />
            {inputType === 'password' && <button
              type="button"
              onClick={showPassword}
              className="form__password-button form__password-button--show"
            >
            </button>}
            {inputType === 'text' && <button
              type="button"
              onClick={hidePassword}
              className="form__password-button form__password-button--hide"
            >
            </button>}
          </div>
        </div>

        {loginError && <div className="form__error">Invalid username or password!</div>}

        <button className="form__submit" type="submit">Sign In</button>
      </form>

      <div className="login__registration">
        Do not have account yet?{' '}
        <NavLink
          to="/auth/register"
          className="login__registration--link"
        >
          Sign Up
        </NavLink>
      </div>
    </div>
  );
};

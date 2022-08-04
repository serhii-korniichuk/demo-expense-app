import React from "react";
import { login } from "../../api";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";

export const Login: React.FC = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

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

  return (
    <div className="login">
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

        <div className="form__input-block">
          <label
            className="form__input--title"
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

        <div className="form__input-block">
          <label
            className="form__input--title"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            className="form__input-field"
            placeholder="**********"
            name="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            required
          />
        </div>

        {loginError && <div className="form__error">Invalid username or password</div>}

        <button className="form__submit" type="submit">Sign In</button>
      </form>

      <div className="login__registration">
        Do not have account yet?
        <NavLink
          to="/auth/register"
          className="login__registartion--link"
        >
          Sign Up
        </NavLink>
      </div>
    </div>
  );
};

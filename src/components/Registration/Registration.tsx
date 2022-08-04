import React from "react";
import { registration } from "../../api";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";

export const Registration: React.FC = () => {
  const [displayName, setDisplayName] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [lengthError, setLengthError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [userError, setUserError] = useState(false);
  const [inputType, setInputType] = useState('password');

  const clearForm = () => {
    setDisplayName('');
    setUserName('');
    setPassword('');
    setConfirmPassword('');
  };

  const navigation = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (password.length < 8 && password !== confirmPassword) {
      setLengthError(true);
      setPasswordError(true);
      clearForm();
      return;
    } else if (password.length < 8) {
      setLengthError(true);
      setPasswordError(false);
      clearForm();
      return;
    } else if (password !== confirmPassword) {
      setPasswordError(true);
      setLengthError(false);
      clearForm();
      return;
    }

    const response = await registration(password, username, displayName);

    if (!response.ok && response.status === 409) {
      setUserError(true);
      setLengthError(false);
      setPasswordError(false);
      clearForm();
    } else {
      clearForm();
      navigation("/auth/login", { replace: true });
    }
  };

  const showPassword = () => {
    setInputType('text');
  };

  const hidePassword = () => {
    setInputType('password');
  };

  return (
    <div className="registration">
      <div className="header">
        <div className="header__company">InCode</div>
        <div className="header__spec">Finance</div>
      </div>
      <form
        method="post"
        className="form registration__form"
        onSubmit={handleSubmit}
      >
        <div className="form__title">Sign Up</div>
        <div className="form__input-block">
          <label
            className="form__input--title"
            htmlFor="displayName"
          >
            Full Name
          </label>
          <input
            id="displayName"
            type="text"
            className="form__input-field"
            value={displayName}
            placeholder="Example Name"
            name="displayName"
            onChange={event => setDisplayName(event.target.value)}
            required
          />
        </div>

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
            value={username}
            placeholder="Example123"
            name="username"
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
            type={inputType}
            className="form__input-field"
            value={password}
            placeholder="**********"
            name="password"
            onChange={event => setPassword(event.target.value)}
            required
          />
          {inputType === 'password' && <button type="button" onClick={showPassword}>show</button>}
          {inputType === 'text' && <button type="button" onClick={hidePassword}>hide</button>}
        </div>

        <div className="form__input-block">
          <label
            className="form__input--title"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type={inputType}
            className="form__input-field"
            value={confirmPassword}
            placeholder="**********"
            name="confirmPassword"
            onChange={event => setConfirmPassword(event.target.value)}
            required
          />
          {inputType === 'password' && <button type="button" onClick={showPassword}>show</button>}
          {inputType === 'text' && <button type="button" onClick={hidePassword}>hide</button>}
        </div>

        {lengthError && <div className="form__error">Password must be at least 8 characters long</div>}
        {passwordError && <div className="form__error">Passwords are not the same!</div>}
        {userError && <div className="form__error">Username is already used by another user</div>}

        <button className="form__submit" type="submit">Sign Up</button>
      </form>

      <div className="registration__auth">
        I have an account
        <NavLink
          to="/auth/login"
          className="registration__auth--link"
        >
          Sign In
        </NavLink>
      </div>
    </div>
  );
};

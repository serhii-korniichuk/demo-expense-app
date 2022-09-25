import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.scss";

export const SignUp: React.FC = () => {
  const [userFullName, setUserFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userConfirmPassword, setUserConfirmPassword] = useState("");
  const [credentials, setCredentials] = useState<Credentials | null>(null);

  const handleUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleUserFullName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserFullName(event.target.value);
  };

  const handleuserPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserPassword(event.target.value);
  };

  const handleuserConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserConfirmPassword(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const inputCredentials = {
      userFullName,
      userName,
      userPassword,
    };

    setCredentials(inputCredentials);
  };

  console.log(credentials);

  return (
    <section className="sign-up">
      <h2 className="sign-up__title">Sign Up</h2>

      <form onSubmit={handleFormSubmit} className="sign-in__form form">
        <label className="form__label">
          <p className="form__input-title">Full Name</p>
          <input
            className="form__text-input form__input"
            type="text"
            value={userFullName}
            onChange={handleUserFullName}
          />
        </label>

        <label className="form__label">
          <p className="form__input-title">User Name</p>
          <input
            className="form__text-input form__input"
            type="text"
            value={userName}
            onChange={handleUserName}
          />
        </label>

        <label className="form__label">
          <p className="form__input-title">Password</p>
          <input
            className="form__pass-input form__input"
            type="password"
            value={userPassword}
            onChange={handleuserPassword}
          />
        </label>

        <label className="form__label">
          <p className="form__input-title">Confirm Password</p>
          <input
            className="form__pass-input form__input"
            type="password"
            value={userConfirmPassword}
            onChange={handleuserConfirmPassword}
          />
        </label>

        <div>
          <button className="form__submit" type="submit">Sign Up</button>
        </div>
      </form>

      <div className="sign-up__sign-in">
        <span>
        I have an account. <Link className="sign-up__sign-in-link" to="/signin">Go to Sign in</Link>
        </span>
      </div>
    </section>
  );
};

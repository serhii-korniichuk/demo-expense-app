import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./SignIn.scss";

export const SignIn: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [credentials, setCredentials] = useState<Credentials | null>(null);

  const handleUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleuserPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserPassword(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const inputCredentials = {
      userName,
      userPassword
    };

    setCredentials(inputCredentials);
  };

  console.log(credentials);

  return (
    <section className="sign-in">
      <h2 className="sign-in__title">Sign In</h2>

      <form onSubmit={handleFormSubmit} className="sign-in__form form">
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
          <p className="form__input-title">User Password</p>
          <input
            className="form__pass-input form__input"
            type="password"
            value={userPassword}
            onChange={handleuserPassword}
          />
        </label>

        <div>
          <button className="form__submit" type="submit">Sign In</button>
        </div>
      </form>

      <div className="sign-in__sign-up">
        <span>
          Don’t have account yet? <Link className="sign-in__sign-up-link" to="/signup">New Account</Link>
        </span>
      </div>
      
      {credentials && <Navigate to="/home" replace />}
    </section>
  );
};

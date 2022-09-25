import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api/api";
import "./SignIn.scss";

export const SignIn: React.FC = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordShown, setUserPasswordShown] = useState(false);
  const [validSignIn, setValidSignIn] = useState(false);
  const [invalidSignIn, setInValidSignIn] = useState(false);

  useEffect(() => {
    if (validSignIn) {
      navigate("/home");
    }
  }, [validSignIn]);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      navigate("/home");
    }
  }, []);

  const handleUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
    setInValidSignIn(false);
  };

  const handleuserPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserPassword(event.target.value);
    setInValidSignIn(false);
  };

  const handleUserPasswordShown = () => {
    setUserPasswordShown(!userPasswordShown);
  };

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const inputCredentials = {
      username: userName,
      password: userPassword
    };

    try {
      const response = await login(inputCredentials);

      if (response.accessToken) {
        setValidSignIn(true);
        
        localStorage.setItem("accessToken", response.accessToken);
      } else {
        setInValidSignIn(true);
      }

    } catch (error) {
      console.log(error);
    }
  };

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
            type={userPasswordShown ? "text" : "password"}
            value={userPassword}
            onChange={handleuserPassword}
          />
          <button
            className={classNames(
              "form__toogle-pass",
              { "form__toogle-pass--shown": userPasswordShown, }
            )}
            type="button"
            onClick={handleUserPasswordShown}
          />
        </label>

        {invalidSignIn && (
          <span className="form__error">Login or password is wrong</span>
        )}

        <div>
          <button className="form__submit" type="submit">Sign In</button>
        </div>
      </form>

      <div className="sign-in__sign-up">
        <span>
          Don’t have account yet? <Link className="sign-in__sign-up-link" to="/signup">New Account</Link>
        </span>
      </div>
    </section>
  );
};

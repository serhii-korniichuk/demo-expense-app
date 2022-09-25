import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import { register } from "../../api/api";
import "./SignUp.scss";

export const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const [userFullName, setUserFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userConfirmPassword, setUserConfirmPassword] = useState("");
  const [userPasswordShown, setUserPasswordShown] = useState(false);
  const [userConfirmPasswordShown, setUserConfirmPasswordShown] = useState(false);
  const [validSignUp, setValidSignUp] = useState(false);
  const [invalidSignUp, setInValidSignUp] = useState("");

  useEffect(() => {
    if (validSignUp) {
      setTimeout(() => {
        navigate("/signin");
      }, 3000);
    }
  }, [validSignUp]);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      navigate("/home");
    }
  }, []);

  const handleUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
    setInValidSignUp("");
  };

  const handleUserFullName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserFullName(event.target.value);
    setInValidSignUp("");
  };

  const handleUserPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserPassword(event.target.value);
    setInValidSignUp("");
  };

  const handleUserConfirmPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserConfirmPassword(event.target.value);
    setInValidSignUp("");
  };

  const handleUserPasswordShown = () => {
    setUserPasswordShown(!userPasswordShown);
    setInValidSignUp("");
  };

  const handleUserConfirmPasswordShown = () => {
    setUserConfirmPasswordShown(!userConfirmPasswordShown);
    setInValidSignUp("");
  };

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const inputCredentials = {
      password: userPassword,
      username: userName,
      displayName: userFullName,
    };

    if (userPassword !== userConfirmPassword) {
      setInValidSignUp("These passwords do not match. Try again");
      return;
    }

    try {
      const response = await register(inputCredentials);

      if (response.id) {
        setValidSignUp(true);
      } else {
        setInValidSignUp(response.message);
      }

    } catch (error) {
      console.log(error);
    }
  };

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
            type={userPasswordShown ? "text" : "password"}
            value={userPassword}
            onChange={handleUserPassword}
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

        <label className="form__label">
          <p className="form__input-title">Confirm Password</p>
          <input
            className="form__pass-input form__input"
            type={userConfirmPasswordShown ? "text" : "password"}
            value={userConfirmPassword}
            onChange={handleUserConfirmPassword}
          />
          <button
            className={classNames(
              "form__toogle-pass",
              { "form__toogle-pass--shown": userConfirmPasswordShown, }
            )}
            type="button"
            onClick={handleUserConfirmPasswordShown}
          />
        </label>

        {invalidSignUp && (
          <span className="form__error">{invalidSignUp}</span>
        )}

        {validSignUp && (
          <span className="form__success">Successful registration. Redirect to login</span>
        )}

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

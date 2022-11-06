import React from "react";
import "./Auth.scss";
import { SignUp } from "./SignUp";
import { SignIn } from "./SignIn";
import { useState, useEffect } from "react";
import { Header } from "components/Header";

export const Auth = (props: any) => {
  const [switchVar, setSwitchVar] = useState(true);

  const onHandleToSignIn = () => {
    setSwitchVar(true);
  };
  const onHandleToSignUp = () => {
    setSwitchVar(false);
  };

  if (switchVar === false) {
    return (
      <div className="authPage">
        <Header></Header>

        <div className="authPage__content">
          <SignUp onHandleToSignIn={onHandleToSignIn}></SignUp>
          <div className="toSignIn">
            <span> I have an account.</span>

            <button className="buttonToSignIn" onClick={onHandleToSignIn}>
              {" "}
              Go to Sign In
            </button>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div className="authPage">
        <Header></Header>

        <div className="authPage__content">
          <SignIn></SignIn>
          <div className="toSignUp">
            <span> Don't have account yet?</span>

            <button className="buttonToSignUp" onClick={onHandleToSignUp}>
              {" "}
              New Account
            </button>
          </div>
        </div>
      </div>
    );
};

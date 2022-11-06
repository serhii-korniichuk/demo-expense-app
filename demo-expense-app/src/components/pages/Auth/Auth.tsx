import React from "react";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { Header } from "components/Header";
import AuthDiv from "./generic/AuthDiv";
import "./Auth.scss";

export const Auth = () => {
  return (
    <div className="authPage">
      <Header></Header>
      <AuthDiv></AuthDiv>
    </div>
  );
};

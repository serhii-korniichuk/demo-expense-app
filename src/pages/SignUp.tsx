import React from "react";
import styled from "styled-components";
import logo from "../images/Logo.svg";

export const SignUp = () => {
  return (
    <div className="formbox">
      <img src={logo} className="logo" alt="logo" />
      <h1 className="text1">Sign Up</h1>
      <form className="form">
        <div className="form__inputBox">
          <Label className="form__inputBox--label" htmlFor="fullName">
            Full Name
          </Label>
          <Input
            className="form__inputBox--input"
            id="fullName"
            type="text"
            placeholder="Example Name"
          />
        </div>
        <div className="form__inputBox">
          <Label className="form__inputBox--label" htmlFor="userName">
            User Name
          </Label>
          <Input
            className="form__inputBox--input"
            id="userName"
            type="text"
            placeholder="Example123"
          />
        </div>
        <div className="form__inputBox">
          <Label className="form__inputBox--label" htmlFor="password">
            Password
          </Label>
          <Input
            className="form__inputBox--input"
            id="password"
            type="password"
          />
        </div>
        <div className="form__inputBox">
          <Label className="form__inputBox--label" htmlFor="confirmPassword">
            Confirm Password
          </Label>
          <Input
            className="form__inputBox--input"
            id="confirmPassword"
            type="password"
          />
        </div>
        <Button type="submit">Sign Up</Button>
      </form>
      <p className="text2">
        I have an account. Go to Sign in
      </p>
    </div>
  );
};

const Label = styled.label`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 155%;
`;

const Input = styled.input`
  width: 100%;
  height: 32px;
  background-color: #1d283a;
  border: none;
  border-bottom: 1px solid #ffffff;
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 155%;
`;

const Button = styled.button`
  width: 100%;
  height: 44px;
  margin-top: 8px;
  margin-bottom: 24px;
  border: none;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
  color: #ffffff;
  background: #539713;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 155%;
`;

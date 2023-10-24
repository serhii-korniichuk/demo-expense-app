import React from "react";
import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export const Auth = () => {
  const [boolAuth, setBoolAuth] = useState(true);

  const toggleSwitch = () => setBoolAuth(!boolAuth)

  return (
    <div className="container d-flex justify-content-center">
      <div className="margin-cont">
        <div className="logo mt-5">
          <h2>InCode</h2>
          <span>Finance</span>
        </div>
        {boolAuth ? (
          <SignIn toggleSwitch={toggleSwitch} />
        ) : (
          <SignUp toggleSwitch={toggleSwitch} />
        )}
      </div>
    </div>
  );
};

export default Auth;

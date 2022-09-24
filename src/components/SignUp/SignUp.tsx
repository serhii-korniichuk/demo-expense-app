import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.scss";

export const SignUp: React.FC = () => {
  return (
    <section className="sign-up">
      <h2>sign up</h2>

      <div className="sign-up__sign-in">
        <Link className="sign-up__sign-in-link" to="/signin">sign in</Link>
      </div>
    </section>
  );
};

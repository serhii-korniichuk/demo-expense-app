import React from "react";
import { Link } from "react-router-dom";

export const SignIn: React.FC = () => {
  return (
    <section className="sign-in">
      <h2>sign in</h2>

      <div className="sign-in__sign-up">
        <Link className="sign-in__sign-up-link" to="/signup">sign up</Link>
      </div>
    </section>
  );
};

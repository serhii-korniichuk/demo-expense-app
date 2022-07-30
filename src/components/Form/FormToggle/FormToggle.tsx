import React from "react";
import { Link, useLocation } from "react-router-dom";

export const FormToggle: React.FC = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/signin" && (
        <p className="form__toggle">
          Don&apos;t have account yet?
          {" "}
          <Link
            to="/signup"
            className="form__link"
          >
            New Account
          </Link>
        </p>
      )}

      {location.pathname === "/signup" && (
        <p className="form__toggle">
          I have an account.
          {" "}
          <Link
            to="/signin"
            className="form__link"
          >
            Go to Sign in
          </Link>
        </p>
      )}
    </>
  );
};

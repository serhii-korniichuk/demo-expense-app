import React from "react";
import { Link, useLocation } from "react-router-dom";

type Props = {
  resetForm: () => void,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>,
}

export const FormToggle: React.FC<Props> = ({ resetForm, setErrorMessage }) => {
  const location = useLocation();

  const handleToggle = () => {
    setErrorMessage("");
    resetForm();
  };

  return (
    <>
      {location.pathname === "/signin" && (
        <p className="form__toggle">
          Don&apos;t have account yet?
          {" "}
          <Link
            to="/signup"
            className="form__link"
            onClick={handleToggle}
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
            onClick={handleToggle}
          >
            Go to Sign in
          </Link>
        </p>
      )}
    </>
  );
};

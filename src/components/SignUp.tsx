import React, { useState, FC } from "react";
import { ToastContainer, toast } from "react-toastify";
import { ISignProps, IUserReg } from "../types";
import { signUp } from "../auth";

export const SignUp: FC<ISignProps> = ({ toggleSwitch }) => {
  const [signUpData, setSignUpData] = useState<IUserReg>({
    username: "",
    password: "",
    displayName: "",
  });
  const [isPasswordShown, setIsPasswordShown] = useState({
    password: false,
    confirmPassword: false,
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const validator = () => {
    const { displayName, username, password } = signUpData;
    let error = '';

    if (displayName.length < 4) {
      error += "Full name is too short; ";
    }
    if (username.length < 4) {
      error += "User name is too short; ";
    }
    if (password.length < 9) {
      error += "Password is too short; ";
    }
    if (password !== confirmPassword) {
      error += "Passwords are not the same;";
    }

    return error;
  };

  const sendSignUp = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const validationError = validator()

    if (!validationError) {
      signUp(signUpData)
        .then(({ status }) => {
          if (status === 201) {
            toggleSwitch()
          }
        })
        .catch((error) => toast.error(error.response.data.message))
    } else {
      toast.error(validationError)
    }

  };

  return (
    <div className="App mt-5">
      <h1>Sign Up</h1>
      <div className="cover mt-5">
        <ToastContainer position="top-center" theme="dark" />
        <form onSubmit={sendSignUp} className="mb-3">
          <div className="form-group">
            <label>Full name</label>
            <input
              type="name"
              className="form-control"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSignUpData((prev) => ({
                  ...prev,
                  displayName: e.target.value,
                }));
              }}
            />
          </div>
          <div className="form-group">
            <label>User Name</label>
            <input
              type="name"
              className="form-control"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSignUpData((prev) => ({
                  ...prev,
                  username: e.target.value,
                }));
              }}
            />
          </div>
          <div className="form-group position-relative">
            <label>Password</label>
            <input
              type={isPasswordShown.password ? "text" : "password"}
              className="form-control"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSignUpData((prev) => ({
                  ...prev,
                  password: e.target.value,
                }));
              }}
            />
            <i
              className={`bi eye ${isPasswordShown.password ? "bi-eye" : "bi-eye-slash"
                }`}
              onClick={() =>
                setIsPasswordShown((prev) => ({
                  ...prev,
                  password: !isPasswordShown.password,
                }))
              }
            />
          </div>
          <div className="form-group position-relative">
            <label>Confirm Password</label>
            <input
              type={isPasswordShown.confirmPassword ? "text" : "password"}
              className="form-control"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setConfirmPassword(e.target.value);
              }}
            />
            <i
              className={`bi eye ${isPasswordShown.confirmPassword ? "bi-eye" : "bi-eye-slash"
                }`}
              onClick={() =>
                setIsPasswordShown((prev) => ({
                  ...prev,
                  confirmPassword: !isPasswordShown.confirmPassword,
                }))
              }
            />
          </div>
          <button type="submit" className="btn submit-btn mt-4 w-100">
            Sign Up
          </button>
        </form>
        <div className="redirect">
          <span className="grey">I have an account. </span>
          <span className="toggler" onClick={toggleSwitch}>
            Go to Sign in
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

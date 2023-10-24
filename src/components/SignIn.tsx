import React, { useState, FC } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { ISignProps, IUserData } from "../types";
import { signIn } from "../auth";

export const SignIn: FC<ISignProps> = ({ toggleSwitch }) => {
  const [signInData, setSignInData] = useState<IUserData>({
    username: "",
    password: "",
  });
  const [passwordShown, setPasswordShown] = useState(false);
  const navigate = useNavigate();

  const doSignIn = (e: React.SyntheticEvent) => {
    e.preventDefault();
    signIn(signInData)
      .then((response) => {
        const { accessToken, refreshToken } = response.data;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("wasRedirected", "true");
        navigate("/");
      })
      .catch((error) => toast.error(error.response.data.message));
  }

  return (
    <div className="App mt-5">
      <ToastContainer position="top-center" theme="dark" />
      <h1>Sign In</h1>
      <div className="cover mt-5">
        <form onSubmit={doSignIn} className="mb-3">
          <div className="form-group">
            <label>User Name</label>
            <input
              type="name"
              className="form-control"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSignInData((prev) => ({
                  ...prev,
                  username: e.target.value,
                }));
              }}
            />
          </div>
          <div className="form-group position-relative">
            <label>Password</label>
            <input
              type={passwordShown ? "text" : "password"}
              className="form-control"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSignInData((prev) => ({
                  ...prev,
                  password: e.target.value,
                }));
              }}
            />
            <i
              className={`bi eye ${passwordShown ? "bi-eye" : "bi-eye-slash"}`}
              onClick={() => setPasswordShown(!passwordShown)}
            />
          </div>
          <button type="submit" className="btn submit-btn mt-4 w-100">
            Sign In
          </button>
        </form>
        <div className="redirect">
          <span className="grey">Don't have account yet? </span>
          <span className="toggler" onClick={toggleSwitch}>
            New account
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

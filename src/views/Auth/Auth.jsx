import Input from "@mui/material/Input";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { grey } from "@mui/material/colors";

import React, { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import "./auth.scss";

const initialState = {
  displayName: "",
  username: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [form, setForm] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);

  let navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { password, username } = form;

    const URL = "https://incode-backend-dev.herokuapp.com/auth";

    if (isSignup) {
      await axios.post(`${URL}/register`, {
        displayName: form.displayName,
        username,
        password,
      });
    } else {
      await axios.post(`${URL}/login`, {
        username,
        password,
      });
    }
    navigate("/");
    window.location.reload();
  };

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };
  return (
    <div className="container">
      <div className="wrapper_form">
        <div className="content">
          <p className="content_text">{isSignup ? "Sign Up" : "Sign In"}</p>
          <form onSubmit={handleSubmit}>
            {isSignup && (
              <div className="formInput">
                <label className="label " htmlFor="fullName">
                  Full Name
                </label>
                <input
                  className="input"
                  name="displayName"
                  type="text"
                  placeholder="fullName"
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <div className="formInput">
              <label className="label " htmlFor="Username">
                Username
              </label>
              <input
                className="input"
                name="username"
                type="text"
                placeholder="Username"
                onChange={handleChange}
                required
              />
            </div>

            <div className="formInput">
              <label className="label " htmlFor="Password">
                Password
              </label>
              <Input
                className="input"
                placeholder="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      sx={{ color: grey[500] }}
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </div>
            {isSignup && (
              <div className="formInput">
                <label className="label " htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <Input
                  className="input"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  onChange={handleChange}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        sx={{ color: grey[500] }}
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </div>
            )}
            <div className="accountBtn">
              <button className="btn">
                {isSignup ? "Sign Up" : " Sign In"}
              </button>
            </div>
          </form>

          <div className="account">
            <p className="question">
              {isSignup ? "I have an account. " : " Don't have an account?"}
              <span className="span" onClick={switchMode}>
                {isSignup ? "Go to Sign in" : " New Account"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

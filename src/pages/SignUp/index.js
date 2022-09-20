import "./index.css";
import Button from "./../../components/Button/index";
import Input from "./../../components/Input/index";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignUpPage = ({ signUp }) => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    if (!password || !username || !fullName || !confirmPassword) {
      alert("Please fill all the fields");
      return;
    }
    if (password.length < 8) {
      alert("Password should be at least 8 characters long");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    signUp(fullName, username, password);
  };

  return (
    <div className="signUp">
      <h1 className="signUp__title">Sign Up</h1>
      <form className="signUp__form" onSubmit={submitForm}>
        <Input
          type="text"
          name="fullname"
          id="fullname"
          placeholder="Example Name"
          label="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <Input
          type="text"
          name="username"
          id="username"
          placeholder="Example123"
          label="User Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="***************"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          showPassword={showPassword}
          toggleShowPassword={() => setShowPassword(!showPassword)}
        />
        <Input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="***************"
          label="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          showPassword={showConfirmPassword}
          toggleShowPassword={() =>
            setShowConfirmPassword(!showConfirmPassword)
          }
        />
        <Button className="signUp__button" type="submit">
          Sign Up
        </Button>
        <div className="disclaimer">
          I have an account.{" "}
          <Link className="link" to="/signin">
            Go to Sign in
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;

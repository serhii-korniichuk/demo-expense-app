import "./index.css";
import Button from "./../../components/Button/index";
import Input from "./../../components/Input/index";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignInPage = ({ signIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    if (!password || !username) {
      alert("Please fill all the fields");
      return;
    }
    if (password.length < 8) {
      alert("Password should be at least 8 characters long");
      return;
    }
    signIn(username, password);
  };

  return (
    <div className="signIn">
      <h1 className="signIn__title">Sign In</h1>
      <form className="signIn__form" onSubmit={submitForm}>
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
        <Button className="signIn__button" type="submit">
          Sign In
        </Button>
        <div className="disclaimer">
          Don’t have account yet?{" "}
          <Link className="link" to="/signup">
            New Account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;

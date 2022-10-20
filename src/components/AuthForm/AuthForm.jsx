import { useState } from "react";
import InputField from "../InputField/InputField";
import { FormButton, Caption, Form, Label } from "./AuthForm.styled";

const AuthForm = ({ signupMode }) => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (e) => {
    const { name: inputName, value } = e.target;
    switch (inputName) {
      case "fullname":
        setFullname(value);
        break;
      case "username":
        setUsername(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirm":
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  const clearForm = () => {
    setFullname("");
    setUsername("");
    setPassword("");
    setConfirmPassword("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("calling sign function");
    clearForm();
  };

  return (
    <Form onSubmit={onSubmit}>
      <Caption>{signupMode ? "Sign Up" : "Sign In"}</Caption>
      <div>
        {signupMode && (
          <Label htmlFor="fullname">
            Full Name
            <InputField
              id="fullname"
              name="fullname"
              value={fullname}
              required={true}
              autocomplete="off"
              onChange={handleChange}
            />
          </Label>
        )}
        <Label htmlFor="username">
          User Name
          <InputField
            id="username"
            name="username"
            value={username}
            required={true}
            autocomplete="off"
            onChange={handleChange}
          />
        </Label>
        <Label htmlFor="password">
          Password
          <InputField
            id="password"
            name="password"
            type="password"
            value={password}
            required={true}
            minLength={6}
            autocomplete="off"
            onChange={handleChange}
          />
        </Label>
        {signupMode && (
          <Label htmlFor="confirm">
            Full Name
            <InputField
              id="confirm"
              name="confirm"
              type="password"
              value={confirmPassword}
              required={true}
              autocomplete="off"
              onChange={handleChange}
            />
          </Label>
        )}
      </div>
      <FormButton type="submit">
        {signupMode ? "Sign Up" : "Sign In"}
      </FormButton>
    </Form>
  );
};

export default AuthForm;

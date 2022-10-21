import { useState } from "react";
import InputField from "../InputField/InputField";
import { FormButton, Caption, Form, Label, Warning } from "./AuthForm.styled";
import { useDispatch } from "react-redux";
import { logInUser, registerUser } from "../../redux/authThunk";

const AuthForm = ({ signupMode }) => {
  const dispatch = useDispatch();

  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmOK, setConfirmOK] = useState(true);

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
        setConfirmOK(true);
        setPassword(value);
        break;
      case "confirm":
        setConfirmOK(true);
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
    if (signupMode) {
      if (password !== confirmPassword) {
        setConfirmOK(false);
        return;
      }
      dispatch(
        registerUser({
          displayName: fullname.trim(),
          username: username.trim(),
          password,
        })
      );
    }
    if (!signupMode) {
      dispatch(logInUser({ username: username.trim(), password }));
    }
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
            minLength={8}
            autocomplete="off"
            onChange={handleChange}
          />
        </Label>
        {signupMode && (
          <Label htmlFor="confirm">
            Confirm Password
            {!confirmOK && <Warning> - enter the same password</Warning>}
            <InputField
              id="confirm"
              name="confirm"
              type="password"
              value={confirmPassword}
              required={true}
              minLength={8}
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

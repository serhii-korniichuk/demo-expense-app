import React, { useState, useReducer } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Container,
  Header,
  HeaderText,
  SubHeader,
  Form,
  FormTitle,
  Label,
  Input,
  ShowButton,
  Button,
  BottomText,
} from "./style";
// import EyeIcon from "../../assets/images/eye.png";
// import EyeOffIcon from "../../assets/images/eye.png";

export const Start = () => {
  // useReducer
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, togglePassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, toggleConfirmPassword] = useState(false);

  const { pathname } = useLocation();

  return (
    <Container>
      <Header>
        <HeaderText>InCode</HeaderText>
        <SubHeader>Finance</SubHeader>
      </Header>

      <Form>
        <FormTitle>SIGN {pathname.includes("sign-up") ? "UP" : "IN"}</FormTitle>
        {pathname.includes("sign-up") && (
          <Label>
            User Name
            <Input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Name Surname"
            />
          </Label>
        )}
        <Label>
          User Name
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Your UserName"
          />
        </Label>
        <Label>
          Password
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <ShowButton onClick={() => togglePassword(!showPassword)}>
            <i className="far fa-eye-slash"></i>
            <i
              className={
                showPassword ? "fa-light fa-eye-slash" : "fa-light fa-eye"
              }
            />
          </ShowButton>
        </Label>
        {pathname.includes("sign-up") && (
          <Label>
            Password
            <Input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
            />
            <ShowButton
              onClick={() => toggleConfirmPassword(!showConfirmPassword)}
            >
              <i className="far fa-eye-slash"></i>
              <i
                className={
                  showConfirmPassword
                    ? "fa-light fa-eye-slash"
                    : "fa-light fa-eye"
                }
              />
            </ShowButton>
          </Label>
        )}

        <Button>Sign {pathname.includes("sign-up") ? "Up" : "In"}</Button>
      </Form>
      <BottomText>
        {pathname.includes("sign-up") ? (
          <>
            I have an account. <Link to="/sign-in"> Go to Sign in</Link>
          </>
        ) : (
          <>
            Don’t have account yet? <Link to="/sign-up"> New Account</Link>
          </>
        )}
      </BottomText>
    </Container>
  );
};

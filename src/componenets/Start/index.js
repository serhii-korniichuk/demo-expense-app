import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { login, register } from "../../redux/actions";
import {
  Container,
  Header,
  HeaderText,
  SubHeader,
  Form,
  FormTitle,
  Label,
  Input,
  HiddenPassword,
  ShowButton,
  Button,
  BottomText,
  InvalidMessage,
} from "./style";
import EyeOffIcon from "../../assets/images/eye-off.svg";

export const Start = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loggedIn } = useSelector((state) => state);

  const [isSubmitPressed, setSubmitIsPressed] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, togglePassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, toggleConfirmPassword] = useState(false);

  const [hiddenPassword, setHiddenPassword] = useState("");
  const [hiddenConfirmPassword, setHiddenConfirmPassword] = useState("");

  const { pathname } = useLocation();

  useEffect(() => {
    if (loggedIn) navigate("/home");
  }, [loggedIn, navigate]);

  useEffect(() => {
    setSubmitIsPressed(false);
    setDisplayName("");
    setUsername("");
    setPassword("");
    togglePassword(false);
    setConfirmPassword("");
    toggleConfirmPassword(false);
    setHiddenPassword("");
  }, [pathname]);

  const updatePassword = (e, setProperty, setHiddenProperty) => {
    setProperty(e.target.value);

    const hiddenProperty = new Array(e.target.value.length).fill("*");
    setHiddenProperty(hiddenProperty.join(""));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitIsPressed(true);

    if (pathname.includes("/sign-up")) {
      if (password && username && displayName && confirmPassword === password) {
        dispatch(
          register({
            password,
            username,
            displayName,
          })
        );
      }
    } else {
      if (password && username) {
        dispatch(
          login({
            username,
            password,
          })
        );
      }
    }
  };

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
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Name Surname"
              isValid={!isSubmitPressed || Boolean(displayName)}
            />
          </Label>
        )}
        <Label>
          User Name
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Your UserName"
            isValid={!isSubmitPressed || Boolean(username)}
          />
        </Label>
        <Label>
          Password
          <Input
            value={password}
            onChange={(e) => updatePassword(e, setPassword, setHiddenPassword)}
            placeholder={!showPassword && hiddenPassword ? "" : "Password"}
            isHidden={false || !showPassword}
            isValid={!isSubmitPressed || Boolean(password)}
          />
          {!showPassword && <HiddenPassword>{hiddenPassword}</HiddenPassword>}
          <ShowButton
            onClick={(e) => {
              e.preventDefault();
              togglePassword(!showPassword);
            }}
          >
            {showPassword ? (
              <i className="fas fa-eye" />
            ) : (
              <img src={EyeOffIcon} alt="" />
            )}
          </ShowButton>
        </Label>
        {pathname.includes("sign-up") && (
          <Label>
            Confirm Password
            <Input
              value={confirmPassword}
              onChange={(e) =>
                updatePassword(e, setConfirmPassword, setHiddenConfirmPassword)
              }
              placeholder={
                !showConfirmPassword && hiddenConfirmPassword
                  ? ""
                  : "Confirm Password"
              }
              isHidden={!showConfirmPassword}
              isValid={
                !isSubmitPressed ||
                Boolean(confirmPassword && confirmPassword === password)
              }
            />
            {!showConfirmPassword && (
              <HiddenPassword>{hiddenConfirmPassword}</HiddenPassword>
            )}
            <ShowButton
              onClick={(e) => {
                e.preventDefault();
                toggleConfirmPassword(!showConfirmPassword);
              }}
            >
              {showConfirmPassword ? (
                <i className="fas fa-eye" />
              ) : (
                <img src={EyeOffIcon} alt="" />
              )}
            </ShowButton>
            {isSubmitPressed && Boolean(confirmPassword !== password) && (
              <InvalidMessage>Passwords don't match</InvalidMessage>
            )}
          </Label>
        )}

        <Button onClick={handleSubmit}>
          Sign {pathname.includes("sign-up") ? "Up" : "In"}
        </Button>
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

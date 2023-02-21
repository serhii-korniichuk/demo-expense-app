import { useState } from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import Logo from "../../components/Logo/Logo";
import { TextLink } from "../../components/SharedBlocks/SharedBlocks";
import { BottomText, AuthContainer } from "./Auth.styled";

const Auth = () => {
  const [signup, setSignup] = useState(false);

  const toggleSignup = () => {
    setSignup((signup) => !signup);
  };

  return (
    <AuthContainer>
      <Logo />
      <AuthForm signupMode={signup} />
      <BottomText>
        {signup ? "I have an account." : "Don’t have account yet?"}{" "}
        <TextLink onClick={toggleSignup}>
          {signup ? "Go to Sign in" : "New Account"}
        </TextLink>
      </BottomText>
    </AuthContainer>
  );
};

export default Auth;

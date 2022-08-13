import React from "react";
import { observer } from "mobx-react-lite";
import AuthLayout from "../../UIComponents/AuthPage Components/AuthLayout";
import Title from "../../UIComponents/AuthPage Components/Title";
import LoginFooter from "../../UIComponents/AuthPage Components/FooterLogin";
import LoginForm from "../../UIComponents/AuthPage Components/LoginForm";

const SignInPage: React.FC = () => {

  return (
    <AuthLayout>
      <Title>SIGN IN</Title>
      <LoginForm></LoginForm>
      <LoginFooter></LoginFooter>
    </AuthLayout>
  );
};

export default observer(SignInPage); 
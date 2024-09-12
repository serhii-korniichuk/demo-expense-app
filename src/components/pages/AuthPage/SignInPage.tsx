import React from "react";
import { observer } from "mobx-react-lite";
import AuthLayout from "../../UIComponents/AuthPageComponents/AuthLayout";
import Title from "../../UIComponents/AuthPageComponents/Title";
import LoginFooter from "../../UIComponents/AuthPageComponents/FooterLogin";
import LoginForm from "../../UIComponents/AuthPageComponents/LoginForm";

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
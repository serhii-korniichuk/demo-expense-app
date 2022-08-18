import React from "react";
import { observer } from "mobx-react-lite";
import AuthLayout from "../../UIComponents/AuthPageComponents/AuthLayout";
import Title from "../../UIComponents/AuthPageComponents/Title";
import FooterRegister from "../../UIComponents/AuthPageComponents/FooterRegister";
import RegisterFrom from "../../UIComponents/AuthPageComponents/RegisterForm";

const SignUpPage: React.FC = () => {

  return (
    <AuthLayout>
      <Title>SIGN UP</Title>
      <RegisterFrom></RegisterFrom>
      <FooterRegister></FooterRegister>
    </AuthLayout>
  );
};

export default observer(SignUpPage);
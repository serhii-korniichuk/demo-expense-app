import React from 'react';
import { observer } from 'mobx-react-lite'
import AuthLayout from '../../UIComponents/AuthLayout';
import Title from '../../UIComponents/Title';
import FooterRegister from '../../UIComponents/FooterRegister';
import RegisterFrom from '../../UIComponents/RegisterForm';

const SignUpPage: React.FC = () => {

  return (
    <AuthLayout>
      <Title>SIGN UP</Title>
      <RegisterFrom></RegisterFrom>
      <FooterRegister></FooterRegister>
    </AuthLayout>
  )
}

export default observer(SignUpPage)
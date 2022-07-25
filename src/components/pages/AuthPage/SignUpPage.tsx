import React from 'react';
import { observer } from 'mobx-react-lite'
import AuthLayout from '../../UIComponents/AuthPage Components/AuthLayout';
import Title from '../../UIComponents/AuthPage Components/Title';
import FooterRegister from '../../UIComponents/AuthPage Components/FooterRegister';
import RegisterFrom from '../../UIComponents/AuthPage Components/RegisterForm';

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
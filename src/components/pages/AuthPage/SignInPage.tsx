import React from 'react'
import { observer } from 'mobx-react-lite'
import AuthLayout from '../../UIComponents/AuthLayout';
import Title from '../../UIComponents/Title';
import LoginFooter from '../../UIComponents/FooterLogin';
import LoginForm from '../../UIComponents/LoginForm';

const SignInPage: React.FC = () => {

  return (
    <AuthLayout>
      <Title>SIGN IN</Title>
      <LoginForm></LoginForm>
      <LoginFooter></LoginFooter>
    </AuthLayout>
  )
}

export default observer(SignInPage) 
import { useState } from 'react';
import styled from 'styled-components';
import {
  Header,
  HeaderUnderText,
} from '../components/auth-forms/GeneralComponents';
import LoginForm from '../components/auth-forms/LoginForm';
import RegisterForm from '../components/auth-forms/RegisterForm';

enum AuthMode {
  Login = 'login',
  Register = 'register',
}

export default function AuthPage(): JSX.Element {
  const [mode, setMode] = useState(AuthMode.Login);

  const pageByMode: Record<AuthMode, JSX.Element> = {
    [AuthMode.Login]: (
      <LoginForm onModeChange={(): void => setMode(AuthMode.Register)} />
    ),
    [AuthMode.Register]: (
      <RegisterForm onModeChange={(): void => setMode(AuthMode.Login)} />
    ),
  };

  const currentPage = pageByMode[mode];
  return (
    <AuthWrapper>
      <AuthBlock>
        <HeaderBlock>
          <Header>InCode</Header>
          <HeaderUnderText>Finance</HeaderUnderText>
        </HeaderBlock>
        <AuthFormWrapper>{currentPage}</AuthFormWrapper>
      </AuthBlock>
    </AuthWrapper>
  );
}

const HeaderBlock = styled.div`
  margin: 48px 0 0 48px;
`;

const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  align-items: stretch;

  @media screen and (min-device-width: 480px) {
    align-items: center;
  }
`;

const AuthBlock = styled.div`
  background: #1d283a;
  min-width: 424px;
  flex-grow: 1;
`;

const AuthFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

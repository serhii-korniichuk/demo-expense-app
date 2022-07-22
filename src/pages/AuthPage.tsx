import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LoginForm from '../components/auth-forms/LoginForm';
import RegisterForm from '../components/auth-forms/RegisterForm';
import PageTitle from '../components/PageTitle';
import PageProps from './PageProps.interface';

enum AuthMode {
  Login = 'login',
  Register = 'register',
}

export default function AuthPage({
  authorized,
  setTokens,
}: PageProps): JSX.Element {
  const [mode, setMode] = useState(AuthMode.Login);
  const navigate = useNavigate();

  useEffect(() => {
    if (authorized) {
      navigate('/home');
    }
  }, [authorized, navigate]);

  const pageByMode: Record<AuthMode, JSX.Element> = {
    [AuthMode.Login]: (
      <LoginForm
        setTokens={setTokens}
        onModeChange={(): void => setMode(AuthMode.Register)}
      />
    ),
    [AuthMode.Register]: (
      <RegisterForm
        setTokens={setTokens}
        onModeChange={(): void => setMode(AuthMode.Login)}
      />
    ),
  };

  const currentPage = pageByMode[mode];
  return (
    <AuthWrapper>
      <AuthBlock>
        <PageTitle />
        <AuthFormWrapper>{currentPage}</AuthFormWrapper>
      </AuthBlock>
    </AuthWrapper>
  );
}

const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: stretch;
  justify-content: center;
  @media screen and (min-device-width: 1000px) {
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

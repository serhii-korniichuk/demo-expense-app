import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { Header } from '../../components/header';

export const AuthLayout = () => {
  return (
    <AuthLayoutRoot>
      <Content>
        <Header />

        <Body>
          <Outlet />
        </Body>
      </Content>
    </AuthLayoutRoot>
  );
};

const AuthLayoutRoot = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  justify-content: center;
`;

const Content = styled.div`
  width: 424px;
  height: 100%;
  background: #1d283a;
`;

const Body = styled.div`
  margin-top: 72px;
  padding: 0 48px;
`;

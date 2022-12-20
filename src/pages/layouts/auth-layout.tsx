import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { Header } from '../../components/header';
import { Text } from '../../components/text';
import { RootState } from '../../core/store';

export const AuthLayout = () => {
  const { isLoading } = useSelector((state: RootState) => state.auth);

  return (
    <AuthLayoutRoot>
      <Content>
        <Header />
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <Body>
            <Outlet />
          </Body>
        )}
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

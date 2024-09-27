import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { Header } from '../../components/header';

export const HomeLayout = () => {
  return (
    <HomeLayoutRoot>
      <Header />
      <Body>
        <Outlet />
      </Body>
    </HomeLayoutRoot>
  );
};

const HomeLayoutRoot = styled.div`
  width: 100%;
  height: 100vh;
  background: #1d283a;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

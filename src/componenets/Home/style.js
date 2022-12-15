import styled from "styled-components";

export const Wrapper = styled.div`
  margin: auto;
  padding: 48px 60px 41px;
  min-height: 100vh;
  width: 100%;
  background: #1d283a;
  box-sizing: border-box;
`;

export const Header = styled.header``;

export const HeaderText = styled.h2`
  position: relative;
  margin: 0;
  font-weight: 700;
  font-size: 36px;
`;

export const DecorationImage = styled.img`
  position: absolute;
  bottom: 90%;
  right: -115px;
`;

export const SubHeader = styled.h4`
  margin: 0;
  color: #539713;
  font-weight: 600;
`;

export const Main = styled.main`
  margin: 109px auto 0;
  position: relative;
  width: 100%;
  max-width: 508px;
  text-align: center;
  line-height: 24.8px;
  font-weight: 600;
  font-size: 16px;
`;

export const MainTitle = styled.h2`
  font-size: 48px;
`;

export const Text = styled.p`
  margin: 48px auto;
  width: 90%;
`;

export const LogOut = styled.button`
  height: 44px;
  border: none;
  color: #fff;
  background: #539713;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
  padding: 0 16px;
  font-weight: 600;
  font-size: 16px;
`;

export const HomeImage = styled.img`
  margin: 72px auto 0;
  display: block;
`;

import styled from "styled-components";

// const mobile =

export const Wrapper = styled.div`
  margin: auto;
  padding: 48px 60px 41px;
  min-height: 500px;
  height: 100vh;
  width: 100%;
  background: #1d283a;
  box-sizing: border-box;
  overflow: hidden visible;

  @media screen and (max-width: 426px) {
    height: 100vh;
    padding: 30px;
    overflow-y: hidden;
  }
`;

export const Header = styled.header``;

export const HeaderText = styled.h2`
  position: relative;
  margin: 0;
  font-weight: 700;
  font-size: 36px;

  @media screen and (max-width: 426px) {
    font-size: 26px;
  }
`;

export const DecorationImage = styled.img`
  position: absolute;
  bottom: -20px;
  right: -110px;

  @media screen and (max-width: 426px) {
    height: 100px;
    bottom: -30%;
    right: -40px;
  }

  @media screen and (max-width: 281px) {
    height: 80px;
    right: -24%;
  }
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
  height: calc(100vh - 220px);
  text-align: center;
  line-height: 24.8px;
  font-weight: 600;
  font-size: 16px;
`;

export const MainTitle = styled.h2`
  position: relative;
  font-size: 48px;

  @media screen and (max-width: 426px) {
    font-size: 28px;
  }

  @media screen and (max-width: 281px) {
    font-size: 21px;
  }
`;

export const Text = styled.p`
  margin: 48px auto;
  width: 90%;

  @media screen and (max-width: 426px) {
    margin: 30px auto;
    font-size: 14px;
  }

  @media screen and (max-width: 281px) {
    margin: 25px auto;
    width: 95%;
    line-height: 1.7;
    font-size: 12px;
  }
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

  @media screen and (max-width: 426px) {
    width: 100%;
  }
`;

export const HomeImage = styled.img`
  margin: 72px auto 0;
  display: block;

  @media screen and (max-width: 426px) {
    position: absolute;
    margin: 0;
    width: 90%;
    bottom: 0;
    left: 5%;
  }
`;

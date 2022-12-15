import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions";
import Decoration from "../../assets/images/decor.png";
import Image from "../../assets/images/home-image.png";
import {
  Wrapper,
  Header,
  HeaderText,
  DecorationImage,
  SubHeader,
  Main,
  MainTitle,
  Text,
  LogOut,
  HomeImage,
} from "./style";

export const Home = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Header>
        <HeaderText>InCode</HeaderText>
        <SubHeader>Finance</SubHeader>
      </Header>

      <Main>
        <MainTitle>
          CONGRATULATIONS
          <DecorationImage src={Decoration} alt="" />
        </MainTitle>
        <Text>
          Now you are on the main page. Soon we will provide you with detailed
          feedback on the result of your work
        </Text>
        <LogOut onClick={() => dispatch(logout())}>Log Out</LogOut>
        <HomeImage src={Image} alt="footer" />
      </Main>
    </Wrapper>
  );
};

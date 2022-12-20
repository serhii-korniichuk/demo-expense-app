import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
  const { loggedIn, accessToken } = useSelector((store) => store);
  const navigate = useNavigate();

  useEffect(() => {
    const refreshToken = document.cookie.match(
      new RegExp("(^| )refreshToken=([^;]+)")
    );
    refreshToken = refreshToken && refreshToken[2];

    if (!refreshToken) navigate("/login"); // also could've used api request to update refreshToken
  }, []);

  useEffect(() => {
    if (!loggedIn) {
      navigate("/sign-in");
    }
  }, [loggedIn]);

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
        <LogOut onClick={() => dispatch(logout(accessToken))}>Log Out</LogOut>
        <HomeImage src={Image} alt="footer" />
      </Main>
    </Wrapper>
  );
};

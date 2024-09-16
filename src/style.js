import { createGlobalStyle } from "styled-components";
import Montserrat400 from "./assets/fonts/Montserrat/static/Montserrat-Medium.ttf";
import Montserrat600 from "./assets/fonts/Montserrat/static/Montserrat-SemiBold.ttf";
import Montserrat700 from "./assets/fonts/Montserrat/static/Montserrat-Bold.ttf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url(${Montserrat400}) format('truetype');
    font-style: normal;
    font-weight: 400;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${Montserrat600}) format('truetype');
    font-style: normal;
    font-weight: 600;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${Montserrat700}) format('truetype');
    font-style: normal;
    font-weight: 700;
  }

  body {
    color: #fff;
    background: #f1f2f1;
    font-family: 'Montserrat';
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    cursor: pointer;

    &:focus,
    &:active {
      outline: none;
    }
  }
`;

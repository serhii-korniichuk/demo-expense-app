import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url('./assets/fonts/Montserrat/static/Montserrat-Medium.ttf') format('truetype');
    font-style: normal;
    font-weight: 400;
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

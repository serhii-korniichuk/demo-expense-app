import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.5;
  color: #fff;
  background-color: #1D283A;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
  
p {
  margin: 0;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

h1,
h2,
h3 {
  margin: 0;
}

a {
  text-decoration: none;
}
`;

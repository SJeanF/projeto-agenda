import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  #root {
    height: 100%;
    width: 100%;
  }

  body {
    background-color: ${(props) => props.theme.background};
    height: 100svh;
    width: 100svw;
  }

`;

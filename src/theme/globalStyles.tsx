import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
    background: #FAFAFA;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default GlobalStyle
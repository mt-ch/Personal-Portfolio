import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Public+Sans&display=swap');

*{
  margin: 0;
  padding: 0;
}

html, body {
  scroll-behavior: smooth;
  background: #fff;
}

*, *::after, *::before {
  box-sizing: border-box;
}



body {
  background: '#ffffff00';
  color: ${({ theme }) => theme.primaryDark};
  height: 100%;
  text-rendering: optimizeLegibility;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

a{
  text-decoration: none;
  cursor: pointer;
}

ul {
  list-style-type: none;
}

svg {
  flex-shrink: 0;
}
`;

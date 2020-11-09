import {
  createGlobalStyle
} from "styled-components";

export const GlobalStyles = createGlobalStyle `
*{
  margin: 0;
  padding: 0;
}

html, body {
  scroll-behavior: smooth;
}

*, *::after, *::before {
  box-sizing: border-box;
}

body {
  background: '#ffffff00';
  color: ${({ theme }) => theme.primaryDark};
  font-family: Helvetica, sans-serif;
  height: 100%;
  text-rendering: optimizeLegibility;
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
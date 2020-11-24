import {createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  user-select: none;
  outline: none;
}

html, body {
  position: relative;
  background-attachment: fixed;
  scroll-behavior: smooth;
  background:  #f2f2f2;
  color: ${({ theme }) => theme.dark};
  &::-webkit-scrollbar {
    display: none;
  }
}

*, *::after, *::before {
  box-sizing: border-box;
}

body {
  height: 100vh;
  width: 100%;
  text-rendering: optimizeLegibility;
  font-size: 100%;
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

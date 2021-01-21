import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  user-select: none;
  outline: none;
}

html, body {
  scroll-behavior: smooth;
  background:  #faf3e1;
  color: ${({ theme }) => theme.black};
  &::-webkit-scrollbar {
    display: none;
  }
}

*, *::after, *::before {
  box-sizing: border-box;
}

body {
  height: 100%;
  width: 100%;
  text-rendering: optimizeLegibility;
  font-size: calc(1em + 1vw)
}

.app{
  position: relative;
  width: 100%;
  height: 100%auto;
}

.line-wrap {
  display: block;
  overflow: hidden;
}

.scrollable {
  height: 100vh;
  overflow-y: hidden;
  
}

a{
  color: black;
  text-decoration: none;
}

ul {
  list-style-type: none;
}

svg {
  flex-shrink: 0;
}
`;

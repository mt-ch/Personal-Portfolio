import {createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  user-select: none;
  outline: none;
  /* cursor: none; */
}

html, body {
  position: relative;
  background-attachment: fixed;
  scroll-behavior: smooth;
  overflow-x: hidden;
  /* cursor: none; */
  background:  #fffefa;
  color: ${({ theme }) => theme.black};
  &::-webkit-scrollbar {
    display: none;
  }
}

*, *::after, *::before {
  box-sizing: border-box;
}

body {
  height: 100vh;
  width: 100vw;
  text-rendering: optimizeLegibility;
  font-size: calc(1em + 1vw)
}

.app{
  position: relative;
  width: 100%;

  .page{
    position: absolute;
    width: 100%;
  }
}

a{
  text-decoration: none;
}

ul {
  list-style-type: none;
}

svg {
  flex-shrink: 0;
}
`;

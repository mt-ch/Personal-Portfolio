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
  &::-webkit-scrollbar {
    display: none;
  }
}

*, *::after, *::before {
  box-sizing: border-box;
}

body {
  color: ${({ theme }) => theme.dark};
  height: 100vh;
  width: 100%;
  text-rendering: optimizeLegibility;
  /* overflow-x: hidden;
  overflow-y: scroll; */
  font-size: 100%;
}

.app{
  /* position: fixed; */
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  /* overflow: hidden; */
  /* pointer-events: none; */
}

h1{ font-size:  clamp(1rem, 13vw, 14rem)}
h2{ font-size:  clamp(4rem, 12vw, 12rem);}
h3{ font-size:  clamp(2.3rem, 6vw, 7rem); font-weight: 600}
h4{ font-size:  clamp(2.3rem, 6vw, 6rem); font-weight: 400}
h5{ font-size:  clamp(2rem, 5vw, 5rem); font-weight: 500}
p{ font-size:  clamp(1rem, 2vw, 2.5rem)};

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

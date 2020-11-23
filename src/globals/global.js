import {createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  user-select: none;
  outline: none;
}

html, body {
  width: 100%;
  height: 100vh;
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
  width: 100vw;
  text-rendering: optimizeLegibility;
  overflow-x: hidden;
  font-size: 100%;
}

h1{ font-size:  clamp(1rem, 13vw, 14rem)}
h2{ font-size:  clamp(4rem, 12vw, 12rem);}
h3{ font-size:  clamp(2.3rem, 8vw, 8rem); font-weight: 600}
h4{ font-size:  clamp(2.3rem, 6vw, 6rem); font-weight: 400}
h5{ font-size:  clamp(2rem, 5vw, 5rem); font-weight: 500}
p{ font-size:  clamp(1rem, 3vw, 3rem)};

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

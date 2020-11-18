import {createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  user-select: none;
  outline: none;
}

html, body {
  width: 100vw;
  height: 100vh;
  position: relative;
  /* background-attachment: fixed; */
  scroll-behavior: smooth;
  background: ${({ theme }) => theme.dark};
  /* &::-webkit-scrollbar {
    display: none;
  } */
}

*, *::after, *::before {
  box-sizing: border-box;
}

body {
  /* background: '#ffffff00'; */
  color: black;
  height: 100vh;
  width: 100vw;
  text-rendering: optimizeLegibility;
  /* font-size: calc(12px + 0.35vw); 
  line-height: calc(12px + 1.05vw); */
  overflow-x: hidden;
  font-size: 100%;
  /* font-family: 'Technique Sans', 'Public Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
}

/* h1{ font-size:  clamp(5rem, 15vw, 15rem)} */
h2{ font-size:  clamp(5rem, 12vw, 12rem); color: black}
h3{ font-size:  clamp(2.3rem, 8vw, 8rem); font-weight: 600}
h4{ font-size:  clamp(2.3rem, 6vw, 6rem); font-weight: 400}
h5{ font-size:  clamp(2rem, 5vw, 5rem); font-weight: 500}
p{ font-size:  clamp(1rem, 3vw, 3rem)};

/* 
h1 {
  font-size: 12em;
  line-height: calc(18px + 1.8vw); 
}

h2 {
  font-size: 6.592em;
  line-height: calc(18px + 1vw); 
}

h3 {
  font-size: 6.4em;
  line-height: calc(18px + 0.7vw); 
}

h4 { font-size: 3.98em; }
h5 { font-size: 3.516em; }
h6 { font-size: 3.413em; }
p  { font-size: 2.123em;}

h4, h5, h6 { 
  line-height: calc(18px + .2vw);
}

h1, h2, h3, h4, h5, h6 {
  margin: calc(12px + 1.05vw) 0; 
} */

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

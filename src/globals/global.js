// Global styles exposed to whole app
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
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
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.primaryLight};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
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
`;

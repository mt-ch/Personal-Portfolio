import React, { useEffect } from "react";
import "../globals/fonts.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../globals/global";
import { theme } from "../globals/theme";

const Layout = ({ children }) => {
  useEffect(() => {}, []);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Layout;

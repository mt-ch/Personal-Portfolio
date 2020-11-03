import React from "react";
import styled from 'styled-components';
// Styling
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../globals/global";
import { FontStyles } from "../globals/fonts";
import { theme } from "../globals/theme";

import TopNav from "./nav/topNav/topNav";
import Footer from "./footer/footer";

const StyledLayout = styled.div`
  position: absolute;
  top: 49px;
  width: 100vw;
  height: auto;
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <FontStyles />
      <StyledLayout>
        <TopNav />
        {children}
        <Footer />
      </StyledLayout>
    </ThemeProvider>
  );
};

export default Layout;

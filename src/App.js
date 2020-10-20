import React, { useState, PureComponent } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globals/global";
import { FontStyles } from "./globals/fonts";
import { theme } from "./globals/theme";
import styled from "styled-components";

// Components
import MainNav from "./components/nav/mainNav";
import Footer from "./components/footer/footer";
import Landing from "./components/landing/landing";
import PreLoader from "./components/preloader";
import Fade from "./components/fade";

// Pages
import Info from "./pages/info/info";
import Projects from "./pages/projects/projects";
import Home from "./pages/home/home";

function demoAsyncCall() {
  return new Promise(resolve => setTimeout(() => resolve(), 2500));
}

const App = () => {
  const [loading, setLoading] = useState(true)
  demoAsyncCall().then(() => setLoading(false));
  // if (loading) {
  //   // if your component doesn't have to wait for an async action, remove this block
  //   return (
  //     <ThemeProvider theme={theme}>
  //       <GlobalStyles />
  //       <FontStyles />
  //       <Fade loading={loading}>
  //         <PreLoader />
  //       </Fade>
  //     </ThemeProvider>
  //   ); // render null when app is not ready
  // }
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <FontStyles />
          <MainNav/>
          <Projects/>
          <Footer />
      </ThemeProvider>
  )
}

export default App

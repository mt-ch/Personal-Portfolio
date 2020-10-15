import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globals/global";
import { FontStyles } from "./globals/fonts";
import { theme } from "./globals/theme";

// Components
import MainNav from "./components/nav/mainNav";
import Footer from "./components/footer";

// Pages
import Info from "./pages/info/info";
import Landing from "./components/landing/landing";
import Projects from "./pages/projects/projects";

function App() {
  const [openInfo, setOpenInfo] = useState(false)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <FontStyles/>
      <div>
        <MainNav openInfo={openInfo} setOpenInfo={setOpenInfo}/>
        <Info openInfo={openInfo} setOpenInfo={setOpenInfo}/>
        <Landing />
        <Projects />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;


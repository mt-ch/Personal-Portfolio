import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { FontStyles } from "./fonts";
import { theme } from "./theme";
import "./css/App.scss";

// Components
import MainNav from "./components/nav/mainNav";
import Footer from "./components/footer";

// Pages
import Home from "./pages/home";
import Info from "./pages/info/info";
import Landing from "./pages/landing/landing";
import Projects from "./pages/projects/projects";

function App() {
  const [openInfo, setOpenInfo] = useState(false)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <FontStyles/>
      <div>
        <MainNav />
        <Info openInfo={openInfo}/>
        <Landing />
        <Projects />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;


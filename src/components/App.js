import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import "./css/App.scss";

//components
import Nav from "./components/nav/nav";
import Home from "./pages/home";
import Info from "./pages/info";
import Footer from "./components/footer";
import Landing from "./pages/landing";
import Projects from "./pages/projects";
import Abstract from "./components/abstract";
import Shapes from "./components/shapes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>
        <Nav />
        <Landing />
        <Projects />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;


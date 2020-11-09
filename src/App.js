import React, { useState, PureComponent } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// Styling
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globals/global";
import { FontStyles } from "./globals/fonts";
import { theme } from "./globals/theme";
import styled from "styled-components";

// Components
import ScrollToTop from "./components/scrollToTop";

// Pages
import Info from "./pages/info";
import Projects from "./pages/projects";
import Home from "./pages/home";
import ProjectDetail from "./pages/projectDetail";

const StyledApp = styled.div`
  overflow: visible;
  .fade-appear,
  .fade-enter {
    opacity: 0;
    z-index: 1;
  }
  .fade-appear-active,
  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 600ms ease 300ms;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0;
    transition: opacity 300ms;
  }

  .page-enter {
    opacity: 0;
    transform: scale(1.1);
  }

  .page-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: opacity 300ms, transform 300ms;
  }

  .page-exit {
    opacity: 1;
    transform: scale(1);
  }

  .page-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }
`;

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}

const App = () => {
  const [loading, setLoading] = useState(true);
  demoAsyncCall().then(() => setLoading(false));

  return (
    <Router>
      <ScrollToTop>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <FontStyles />
          <StyledApp>
            <Route
              render={({ location }) => (
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    timeout={900}
                    classNames="fade"
                  >
                    <Switch location={location}>
                      <Route path="/" exact component={Home} />
                      <Route path="/projects" exact component={Projects} />
                      <Route path="/projects/:id" component={ProjectDetail} />
                      <Route path="/info" component={Info} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              )}
            />
          </StyledApp>
        </ThemeProvider>
      </ScrollToTop>
    </Router>
  );
};

export default App;

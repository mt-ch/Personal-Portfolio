import React, { useState, PureComponent } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// Styling
import styled from "styled-components";

// Components
import ScrollToTop from "./components/scrollToTop";
// import Intro from './components/intro'

// Pages
import Info from "./pages/info";
import Projects from "./pages/projects";
import Home from "./pages/home";
import ProjectDetail from "./pages/projectDetail";

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}

const App = () => {
  const [loading, setLoading] = useState(true);
  demoAsyncCall().then(() => setLoading(false));

  return (
    <Router>
      <ScrollToTop>
          <div>
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
            {/* <Intro/> */}
          </div>
      </ScrollToTop>
    </Router>
  );
};

export default App;

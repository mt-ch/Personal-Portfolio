import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import Home from "./pages/home";
import ProjectDetail from "./pages/projectDetail";
import "./styled/animations.css";

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/projects/:id", name: "ProjectDetail", Component: ProjectDetail },
];

const App = () => {

  return (
    <div className="app">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            {/* {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={1200}
                  classNames="page"
                  unmountOnExit
                > */}
            <div className="page">
              <Component />
            </div>
            {/* </CSSTransition>
              )} */}
          </Route>
        ))}
    </div>
  );
};

export default App;

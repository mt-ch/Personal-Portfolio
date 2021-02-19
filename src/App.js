import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/home";
import "./styled/animations.css";

const routes = [
  { path: "/", name: "Home", Component: Home },
];

const App = () => {
  return (
    <div className="app disable-scrollbars">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
    </div>
  );
};

export default App;

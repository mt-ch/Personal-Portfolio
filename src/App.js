import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loading from "./components/loading";
import Home from './pages/home';
import { CSSTransition } from "react-transition-group";
import { gsap } from "gsap";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3500);
  }, []);
  return (
    <>
      {loading === false ? (
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Router>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default App;

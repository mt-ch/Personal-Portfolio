import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loading from "./components/loading";
import Home from './pages/home';

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
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

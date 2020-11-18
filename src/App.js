import React, { useState, useEffect } from "react";

import About from "./components/about";
import Contact from "./components/contact";
import Projects from "./pages/projects";
import Landing from './components/landing';
import Layout from "./components/layout";

const App = () => {
  const [display, setDisplay] = useState(false);

  function showContent() {
    setDisplay(true);
  }
  return (
    <div>
      <Landing showContent={() => showContent()} />
      {display ? (
        <>
          <Layout>
            <About />
            <Projects />
            <Contact />
          </Layout>
        </>
      ) : null}
    </div>
  );
};

export default App;

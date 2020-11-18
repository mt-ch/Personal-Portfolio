import React, { useState, useEffect } from "react";

import About from "./components/about";
import Contact from "./components/contact";
import Projects from "./components/projects";
import Landing from './components/landing';
import Layout from "./components/layout";
import Overlay from "./components/overlay";

const App = () => {
  const [display, setDisplay] = useState(false);

  function showContent() {
    setDisplay(true);
  }
  return (
    <div>
      <Overlay />
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

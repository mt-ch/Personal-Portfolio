import React, { useState } from "react";
import About from "../components/about";
import Projects from "../components/projects";
import Layout from "../components/layout";
import Landing from "../components/landing";

const Home = () => {
  const [display, setDisplay] = useState(false);

  function showContent() {
    setDisplay(true);
  }
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <Layout>
        <Landing showContent={() => showContent()} />
        {display ? (
          <>
            <About />
            <Projects />
          </>
        ) : null}
      </Layout>
    </div>
  );
};

export default Home;

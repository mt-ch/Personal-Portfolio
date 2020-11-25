import React, { useState } from "react";
import Projects from "../components/projects";
import Layout from "../components/layout";
import Landing from "../components/landing";

const Home = () => {
  const [display, setDisplay] = useState(true);

  function showContent() {
    setDisplay(true);
  }
  return (
    <div
      style={{
        position: "relative",
        width: '100%',
      }}
    >
      <Layout>
        <Landing showContent={() => showContent()} />
        {/* {display ? (
          <> */}
            {/* <About /> */}
            <Projects />
          {/* </>
        ) : null} */}
      </Layout>
    </div>
  );
};

export default Home;

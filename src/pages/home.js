import React, { useState } from "react";
import Projects from "../components/projects";
import Layout from "../components/layout";
import Landing from "../components/landing";
import About from "../components/about";
import Nav from "../components/nav";
import Menu from "../components/menu";
import Contact from '../components/contact';

const Home = () => {
  const [display, setDisplay] = useState(true);

  function showContent() {
    setDisplay(true);
  }
  return (
    <div
      className="home"
    >
      <Landing showContent={() => showContent()} />
      <Layout>
        <Nav />
        {/* <Menu open={open} setOpen={setOpen} /> */}

        {display ? (
          <>
            <About className="section-title" />
            <Projects className="section-title" />
            <Contact className='section-title'/>
          </>
        ) : null}
      </Layout>
    </div>
  );
};

export default Home;

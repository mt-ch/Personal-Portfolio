import React, { useState } from "react";
import Projects from "../components/projects";
import Layout from "../components/layout";
import Landing from "../components/landing";
import About from "../components/about";
import Nav from "../components/nav";
import NavMobile from "../components/navMobile";
import Contact from "../components/contact";
import { useEffect } from "react";
import { HomeDesktop } from "../styled/components.styled";
import SmoothScroll from "../components/SmoothScroll";

const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // Return the width so we can use it in our components
  return { width };
};

const Home = () => {
  const [display, setDisplay] = useState(true);
  // const { width } = useViewport();
  // const breakpoint = 550;

  function showContent() {
    setDisplay(true);
  }

  return (
    <>
      <Layout>
        {/* {width < breakpoint ? ( */}
        <>
          <SmoothScroll>
            <NavMobile />
            <Landing />
            <About />
            <Projects />
            <Contact />
          </SmoothScroll>
        </>
        {/* ) : (
          <>
            <Nav />
            <SmoothScroll>
              <HomeDesktop>
                <div class="side-content">
                  <Landing />
                  <About />
                  <Projects />
                  <Contact />
                </div>
              </HomeDesktop>
            </SmoothScroll>
          </>
        )} */}
      </Layout>
    </>
  );
};

export default Home;

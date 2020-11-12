import React, { useRef } from "react";
import { StyledHome } from "../styled/home.styled";
import Layout from "../components/layout";
//Components
import Landing from "../components/landing";
import FeaturedWork from "../components/featuredWork";
import About from "../components/about";
import Contact from "../components/contact";

const Home = () => {
  return (
    <Layout>
      <StyledHome>
        {/* <Landing/> */}
        <About />
        {/* <FeaturedWork /> */}
        {/* <Contact /> */}
      </StyledHome>
    </Layout>
  );
};
export default Home;

import React, { useRef } from "react";
import Layout from "../components/layout";
//Components
import Landing from "../components/landing";
import FeaturedWork from "../components/featuredWork";
import About from "../components/about";
import Contact from "../components/contact";
import Shape from "../components/shape";
import styled from "styled-components";
import Projects from './projects'

const StyledHome = styled.div`
  padding: 0 ${({ theme }) => theme.padding} 0 ${({ theme }) => theme.padding};
`;
const Home = () => {
  return (
    <Layout>
      <StyledHome>
        <Landing />
        <About />
        {/* <Shape/> */}
        <Projects />
        <Contact />
      </StyledHome>
    </Layout>
  );
};
export default Home;

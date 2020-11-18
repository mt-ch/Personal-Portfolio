import React from "react";
import Layout from "../components/layout";
//Components
import Landing from "../components/landing";
import About from "../components/about";
import Contact from "../components/contact";
import styled from "styled-components";
import Projects from './projects'

const StyledHome = styled.div`
  /* padding: 0 ${({ theme }) => theme.padding} 0 ${({ theme }) => theme.padding}; */
`;
const Home = () => {

  return (
    <Layout>
      <StyledHome  className='home'>
        <Landing />
        <About />
        <Projects />
        <Contact />
      </StyledHome>
    </Layout>
  );
};
export default Home;

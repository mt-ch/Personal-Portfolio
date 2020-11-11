import React from "react";
import { StyledHome } from "../styled/home.styled";
import Layout from "../components/layout";
//Components
import Landing from "../components/landing";
import FeaturedWork from "../components/featuredWork";
import About from '../components/about';

const Home = () => {
  return (
    <Layout isHome={true} color={'black'} text={'black'}>
      <StyledHome>
        <Landing />
        <About/>
        <FeaturedWork />
      </StyledHome>
    </Layout>
  );
};

export default Home;
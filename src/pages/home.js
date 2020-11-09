import React from "react";
import { StyledHome } from "../styled/home.styled";
import Layout from "../components/layout";
//Components
import Landing from "../components/landing";
import FeaturedWork from "../components/featuredWork";

const Home = () => {
  return (
    <Layout isHome={true} color={'black'} text={'black'}>
      <StyledHome>
        <Landing />
        <h1 className="featured-header">Featured Work</h1>
        <FeaturedWork />
      </StyledHome>
    </Layout>
  );
};

export default Home;

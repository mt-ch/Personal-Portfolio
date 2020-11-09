import React from "react";
import { StyledHome } from "./home.styled";

import Layout from "../../components/layout";
//Components
import Landing from "../../components/landing/landing";
import FeaturedWork from "../../components/featuredWork/featuredWork";
import Footer from "../../components/footer/footer";

const Home = () => {
  return (
    <Layout>
      <StyledHome>
        <Landing />
        <h1 className="featured-header">Featured Work</h1>
        <FeaturedWork />
      </StyledHome>
    </Layout>
  );
};

export default Home;

import React from "react";
import { StyledHome } from "./home.styled";

//Components
import Landing from "../../components/landing/landing";
import FeaturedWork from "../../components/featuredWork/featuredWork";
import Footer from "../../components/footer/footer";

const Home = () => {
  return (
    <StyledHome>
      <Landing />
      <p className="featured-title">
        <strong>Featured Work</strong>
      </p>
      <FeaturedWork />
      <Footer />
    </StyledHome>
  );
};

export default Home;

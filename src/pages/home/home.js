import React from "react";
import styled from "styled-components";

//Components
import Landing from "../../components/landing/landing";
import FeaturedWork from "../../components/featuredWork/featuredWork";

const StyledHome = styled.div`
  p {
    font-size: ${({ theme }) => theme.primaryFontSize};
    margin: 0;
  }

  .featured-title {
    padding: 0.5em;
    text-align: end;
  }
`;

const Home = () => {
  return (
    <StyledHome>
      <Landing />
      <p className="featured-title">
        <strong>Featured Work</strong>
      </p>
      <FeaturedWork />
    </StyledHome>
  );
};

export default Home;

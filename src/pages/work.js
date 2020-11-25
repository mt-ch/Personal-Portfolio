import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import Projects from "../components/projects";

const StyledWork = styled.div`
  border-top: black 1px solid;
  margin-top: 10vh;
  padding-top: 10vh;

`;
const About = () => {
  return (
    <Layout>
      <StyledWork>
        <div className='about-header'>
          <h1>Work</h1>
        </div>
        <Projects/>
      </StyledWork>
    </Layout>
  );
};

export default About;

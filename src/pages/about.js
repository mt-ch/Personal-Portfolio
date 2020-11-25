import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import ProfilePic from "../assets/img/ProfilePic.webp";

const StyledAbout = styled.div`
  border-bottom: black 1px solid;
  border-top: black 1px solid;
  margin-top: 10vh;
  padding-top: 10vh;
  .text {
    will-change: transform;
    margin: 10vh 0 10vh 0;

    h5 {
      line-height: 1.4;
    }
  }

  .about-header {
    position: relative;
    /* height: 50vh; */
    display: flex;
    align-items: center;
    /* justify-content: center; */

    h1 {
      position: relative;
      z-index: 1;
    }

    .profile-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      z-index: 0;
      height: 60vw;
      width: 40vw;
      min-height: 300px;
      min-width: 175px;
      max-width: 400px;
      max-height: 450px;
      object-fit: cover;
      margin:auto;
    }
  }
`;
const About = () => {
  return (
    <Layout>
      <StyledAbout>
        <div className="about-header">
          <h1>About</h1>
          {/* <img className="profile-img" src={ProfilePic} /> */}
        </div>
        
        <div class="text">
          <h5>
            Hi! I'm Matt. I have a passion for programming, design and creating
            polished user experiences on the web.
          </h5>
        </div>

        <div class="text">
          <h5>
            I'm a recent Computer Science graduate from the University of Derby,
            currently looking for Frontend Development positions.
          </h5>
        </div>

        <div class="text">
          <h5>
            I have a passion for everyhting JavaScript, in particular React and
            additional libaries to create interactive experiences.
          </h5>
        </div>
      </StyledAbout>
    </Layout>
  );
};

export default About;

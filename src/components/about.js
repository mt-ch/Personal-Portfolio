import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";

const StyledAbout = styled.div`
  .text {
    /* transition: 0.3s ease-out; */
    will-change: transform;
    padding: 15vh 0 15vh 0;

    .about-title{
      small{
        margin-right: 5vw; 
      }
    }

    p, h3{
      line-height: 1.6;
    }
  }
`;

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <StyledAbout id='about'>
      <div
        class="text"
        data-aos="fade-up"
        data-aos-offset="250"
        data-aos-delay="100"
        data-aos-duration="800"
        data-aos-easing="ease"
      >
        <h2 className="about-title">
          <small> (001) </small> ABOUT ME
        </h2>
      </div>

      <div
        class="text"
        data-aos="fade-up"
        data-aos-offset="250"
        data-aos-delay="100"
        data-aos-duration="800"
        data-aos-easing="ease"
      >
        <h4> Hi ,I'm Matt. </h4>
        <p>
          I'm a Junior Frontend Developer and a recent graduate of the Computer
          Science programme at Derby University.
        </p>
      </div>

      <div
        class="text"
        data-aos="fade-up"
        data-aos-offset="250"
        data-aos-delay="100"
        data-aos-duration="800"
        data-aos-easing="ease"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div
        class="text"
        data-aos="fade-up"
        data-aos-offset="250"
        data-aos-delay="100"
        data-aos-duration="800"
        data-aos-easing="ease"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </StyledAbout>
  );
};

export default About;

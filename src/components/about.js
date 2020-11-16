import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";

const StyledAbout = styled.div`
  .about-title {
    margin: 10em 0 0em 0;
    h2 {
      font-weight: light;
      small {
        margin-right: 5vw;
        font-size:  clamp(1rem, 3vw, 3rem);
      }
    }
  }
  .text {
    /* transition: 0.3s ease-out; */
    will-change: transform;
    padding: 10vh 0 10vh 0;

    p,
    h3 {
      line-height: 1.6;
    }
  }
`;

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <StyledAbout id="about">
      <div
        className="about-title"
        data-aos="fade-up"
        data-aos-offset="250"
        data-aos-delay="100"
        data-aos-duration="800"
        data-aos-easing="ease"
      >
        <h2>
          <small>(001)</small>ABOUT ME
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
        <h4>
          <strong>Hi ,I'm Matt.</strong>
        </h4>
        <h5>
          I'm a Junior Frontend Developer and a recent graduate of the Computer
          Science programme at Derby University.
        </h5>
      </div>

      <div
        class="text"
        data-aos="fade-up"
        data-aos-offset="250"
        data-aos-delay="100"
        data-aos-duration="800"
        data-aos-easing="ease"
      >
        <h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h5>
      </div>

      <div
        class="text"
        data-aos="fade-up"
        data-aos-offset="250"
        data-aos-delay="100"
        data-aos-duration="800"
        data-aos-easing="ease"
      >
        <h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h5>
      </div>
    </StyledAbout>
  );
};

export default About;

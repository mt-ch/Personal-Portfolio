import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";

const StyledAbout = styled.div`
  margin: 4rem 0 4rem 0;
  .para {
    margin-top: 13vw;
    transition: 0.3s ease-out;
    will-change: transform;

    h1{
        font-size: 10vw;
    }

    h2{
        font-size: 9vw;
        color: white;
    }

    p{
        font-size: 6vw;
        line-height: 1.3;
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
        class="para"
        data-aos="fade-up"
        data-aos-offset="250"
        data-aos-delay="100"
        data-aos-duration="800"
        data-aos-easing="ease"
      >
        <h1 className="section-title">
          {" "}
          <small> (001) </small> ABOUT ME
        </h1>
      </div>
      <div
        class="para"
        data-aos="fade-up"
        data-aos-offset="250"
        data-aos-delay="100"
        data-aos-duration="800"
        data-aos-easing="ease"
      >
        <h2> Hi ,I'm Matt. </h2>
        <p>
          I'm a Junior Frontend Developer and a recent graduate of the Computer
          Science programme at Derby University.
        </p>
      </div>
      <div
        class="para"
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
        class="para"
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

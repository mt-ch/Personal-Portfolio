import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import ProjectHeader from "./projectHeader";

const StyledAbout = styled.div`
  .text {
    padding: 0 ${({ theme }) => theme.padding} 0 ${({ theme }) => theme.padding};
    will-change: transform;
    margin: 10vh 0 10vh 0;

    h5 {
      line-height: 1.4;
    }
  }
`;

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <StyledAbout id="about" className=" about">
      <div
        className="about-title section-title"
      >
        <ProjectHeader title={"ABOUT ME"} />
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
          <strong>Hi, I'm Matt.</strong>
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
          My current frontend focus is learning React and other libraries, such
          as GSAP and ThreeJs to make creative web experiences, whilst
          developing my design principles.
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
          I aim to take my coding to the next level where i can always provide
          value to a team and personally grow my own skills.
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
          Away from the code, you can find me...
        </h5>
      </div>
    </StyledAbout>
  );
};

export default About;

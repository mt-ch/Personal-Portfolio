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
      {/* <div
        className="about-title section-title"
      >
        <ProjectHeader title={"ABOUT ME"} />
      </div> */}

      <div
        class="text"
        data-aos="fade-up"
        data-aos-offset="250"
        data-aos-delay="100"
        data-aos-duration="800"
        data-aos-easing="ease"
      >
        <h5>
          Hi! I'm Matt. I have a passion for programming, design and creating
          polished user experiences on the web!
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
          I'm a recent Computer Science graduate from the University of Derby,
          currently looking for Frontend Development positions.
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
          I have a passion for everyhting JavaScript, in particular React and
          additional libaries to create interactive experiences.
        </h5>
      </div>
    </StyledAbout>
  );
};

export default About;

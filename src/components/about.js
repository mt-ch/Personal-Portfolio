import React from "react";
import { StyledAbout } from '../styled/components.styled';

const About = () => {
  return (
    <StyledAbout>
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
          I have a passion for everything JavaScript, in particular React and
          additional libaries to create interactive experiences.
        </h5>
      </div>
    </StyledAbout>
  );
};

export default About;

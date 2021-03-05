import React, { useEffect, useRef } from "react";
import { StyledAbout } from "../styled/about.styled";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import $ from "jquery";

const About = ({text}) => {
  let aboutTarget = useRef(null);

  useEffect(() => {

    const aboutText = Splitting({ target: aboutTarget, by: "lines" });

    aboutText[0].lines.forEach((line, index) => {
      $(line).wrapAll(
        "<div class='about-text-wrapper' style=display:block;overflow:hidden;width:100%;height:100%;><div class='landing-line about-line'></div></div>"
      );
      line.forEach((word) => {
        word.style.marginRight = ".2em";
      });
    });

    ScrollTrigger.refresh(true);
  }, [ScrollTrigger]);

  return (
    <StyledAbout id="section-about">
      <p ref={(el) => (aboutTarget = el)}>
        {text}
      </p>
    </StyledAbout>
  );
};

export default About;

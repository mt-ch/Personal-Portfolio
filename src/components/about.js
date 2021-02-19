import React, { useEffect, useRef } from "react";
import { StyledAbout } from "../styled/about.styled";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import $ from "jquery";
import { gsap } from "gsap";

const About = () => {
  const revealAbout = useRef(null);
  let aboutTarget = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

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
      <div ref={revealAbout} class="about-area">
        <div class="about-info">
          <p ref={(el) => (aboutTarget = el)}>
            Hi! I'm Matt. I'm a recent Computer Science graduate from the
            University of Derby. I'm currently searching for Frontend Development
            positions, based in the UK.
          </p>
        </div>
      </div>
    </StyledAbout>
  );
};

export default About;

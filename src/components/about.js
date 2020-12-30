import React, { useEffect, useRef } from "react";
import { StyledAbout } from "../styled/components.styled";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import $ from "jquery";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const revealRef = useRef(null);
  let textTarget = useRef(null);
  useEffect(() => {
    const results = Splitting({ target: textTarget, by: "lines" });
    results[0].lines.forEach((line, index) => {
      $(line).wrapAll("<div style=overflow:hidden;></div>");
      gsap.from(line, {
        y: "100%",
        delay: index / 4,
        scrollTrigger: {
          trigger: revealRef.current,
          start: "top 80%",
        },
      });

      line.forEach((word) => {
        word.style.marginRight = ".25em";
      });
    });
    gsap.from(".about-text", {
      duration: 0.7,
      opacity: 0,
      stagger: 0.5,
      ease: Power3.easeInOut,
      scrollTrigger: {
        trigger: ".about-text",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <StyledAbout className="section-area">
      <div ref={revealRef}>
        <h5 ref={(el) => (textTarget = el)}>
          Hi! I'm Matt. I have a passion for programming, design and creating
          polished user experiences on the web. I'm a recent Computer Science
          graduate from the University of Derby, currently looking for Frontend
          Development positions, based in the UK.
        </h5>
      </div>
    </StyledAbout>
  );
};

export default About;

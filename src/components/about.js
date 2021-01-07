import React, { useEffect, useRef } from "react";
import { StyledAbout } from "../styled/components.styled";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import $ from "jquery";
import Me from '../assets/me.webp'
import { TimelineLite, gsap, Power2, Expo, Power3 } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import './image.css'

gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);

const About = () => {
  const revealRef = useRef(null);
  let textTarget = useRef(null);
  let containerRef = useRef(null);
  let imageRef = useRef(null);


  const tl = new TimelineLite({scrollTrigger: {
    trigger: '.container',
    markers: true
  }});
  useEffect(() => {
    let imageReveal = CSSRulePlugin.getRule(".img-container:after");
    tl.set(containerRef, {
      visibility: "visible"
    })
      .to(imageReveal, {
        duration: 2455,
        height: "0%",
        ease: Expo.easeInOut
      })
      .from(imageRef, {
        duration: 1.4,
        scale: 1.5,
        ease: Power2.easeInOut,
        delay: -1.5
      });

    const results = Splitting({ target: textTarget, by: "lines" });
    results[0].lines.forEach((line, index) => {
      $(line).wrapAll("<div style=overflow:hidden;><div class='about'></div></div>");
      line.forEach((word) => {
        word.style.marginRight = ".2em";
      });
    });
    gsap.from(".about", {
      duration: 2,
      yPercent: 150,
      stagger: 0.2,
      ease: Power3.easeInOut,
      scrollTrigger: {
        trigger: revealRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <StyledAbout className="section-area">
       <div className="container" ref={el => (containerRef = el)}>
        <>
          <div className="img-container">
            <img
              ref={el => (imageRef = el)}
              src={Me}
            />
          </div>
        </>
      </div>
      <div ref={revealRef}>
        <h5 ref={(el) => (textTarget = el)}>
          Hi! I'm Matt. I'm a recent Computer Science graduate from the
          University of Derby. I have a passion for programming, design and
          creating polished user experiences on the web. Im currently searching
          for Frontend Development positions, based in the UK.
        </h5>
      </div>
    </StyledAbout>
  );
};

export default About;

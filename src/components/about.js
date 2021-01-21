import React, { useEffect, useRef } from "react";
import { StyledAbout } from "../styled/components.styled";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import $ from "jquery";
import { gsap } from "gsap";

const About = () => {
  const revealHeaderRef = useRef(null);
  const revealWhoRef = useRef(null);
  const revealWhatRef = useRef(null);
  const revealWhyRef = useRef(null);
  const revealWhereRef = useRef(null);
  let whoTarget = useRef(null);
  let whatTarget = useRef(null);
  let whyTarget = useRef(null);
  let whereTarget = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const whoText = Splitting({ target: whoTarget, by: "lines" });
    const whatText = Splitting({ target: whatTarget, by: "lines" });
    const whyText = Splitting({ target: whyTarget, by: "lines" });
    const whereText = Splitting({ target: whereTarget, by: "lines" });

    whoText[0].lines.forEach((line, index) => {
      $(line).wrapAll(
        "<div style=display:block;overflow:hidden;><div style=margin-bottom:1vh; class='about-who'></div></div>"
      );
      line.forEach((word) => {
        word.style.marginRight = ".2em";
      });
    });
    whatText[0].lines.forEach((line, index) => {
      $(line).wrapAll(
        "<div style=display:block;overflow:hidden;><div style=margin-bottom:1vh; class='about-what'></div></div>"
      );
      line.forEach((word) => {
        word.style.marginRight = ".2em";
      });
    });
    whyText[0].lines.forEach((line, index) => {
      $(line).wrapAll(
        "<div style=display:block;overflow:hidden;><div style=margin-bottom:1vh; class='about-why'></div></div>"
      );
      line.forEach((word) => {
        word.style.marginRight = ".2em";
      });
    });
    whereText[0].lines.forEach((line, index) => {
      $(line).wrapAll(
        "<div style=display:block;overflow:hidden;><div style=margin-bottom:1vh; class='about-where'></div></div>"
      );
      line.forEach((word) => {
        word.style.marginRight = ".2em";
      });
    });
    gsap.from(".about-who", {
      duration: 2,
      yPercent: 150,
      stagger: 0.2,
      ease: "Power3.easeInOut",
      scrollTrigger: {
        trigger: revealWhoRef.current,
        start: "top 95%",
      },
    });
    gsap.from(".about-what", {
      duration: 2,
      yPercent: 150,
      stagger: 0.2,
      ease: "Power3.easeInOut",
      scrollTrigger: {
        trigger: revealWhatRef.current,
        start: "top 95%",
      },
    });
    gsap.from(".about-why", {
      duration: 2,
      yPercent: 150,
      stagger: 0.2,
      ease: "Power3.easeInOut",
      scrollTrigger: {
        trigger: revealWhyRef.current,
        start: "top 95%",
      },
    });
    gsap.from(".about-where", {
      duration: 2,
      yPercent: 150,
      stagger: 0.2,
      ease: "Power3.easeInOut",
      scrollTrigger: {
        trigger: revealWhereRef.current,
        start: "top 95%",
      },
    });
    gsap.from(".about-header-text", {
      duration: 3,
      yPercent: 150,
      stagger: 1,
      ease: "Power3.easeInOut",
      scrollTrigger: { trigger: revealHeaderRef.current, start: "top 95%" },
    });
    gsap.from(".border-about", {
      duration: 2,
      delay: 1.3,
      width: 0,
      ease: "Power3.easeInOut",
      scrollTrigger: { trigger: revealHeaderRef.current, start: "top 95%" },
    });
    ScrollTrigger.refresh(true);
  }, [ScrollTrigger]);

  return (
    <StyledAbout id="section-about">
      <div ref={revealHeaderRef} class="about-header">
        <div class="line-wrap">
          <h1 className="about-header-text">ABOUT</h1>
        </div>
        <div class="line-wrap">
          <p className="about-header-text">/01</p>
        </div>
      </div>
      <div class="border border-about"></div>
      <div class="about-area">
      <div ref={revealWhoRef} class="about-info">
        <div class="line-wrap">
          <p className="about-section-title about-who">WHO</p>
        </div>
        <h4 ref={(el) => (whoTarget = el)}>I'm Matthew Chan.</h4>
      </div>
      <div ref={revealWhatRef} class="about-info">
        <div class="line-wrap">
          <p className="about-section-title about-what">WHAT</p>
        </div>
        <h4 ref={(el) => (whatTarget = el)}>
          I'm a recent Computer Science graduate from the University of Derby.
          Im currently searching for Frontend Development positions, based in
          the UK.
        </h4>
      </div>
      <div ref={revealWhyRef} class="about-info">
        <div class="line-wrap">
          <p className="about-section-title about-why">WHY</p>
        </div>
        <h4 ref={(el) => (whyTarget = el)}>
          I have a passion for programming, design and creating polished user
          experiences on the web .
        </h4>
      </div>
      <div ref={revealWhereRef} class="about-info">
        <div class="line-wrap">
          <p className="about-section-title about-where">WHERE</p>
        </div>
        <h4 ref={(el) => (whereTarget = el)}>
          It's 6pm for me, so i'm most likely online now. So say hi.
        </h4>
      </div>
      </div>
    </StyledAbout>
  );
};

export default About;

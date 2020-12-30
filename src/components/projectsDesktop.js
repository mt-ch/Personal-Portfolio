import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  StyledProjectsDesktop,
  StyledPhotoReveal,
} from "../styled/components.styled";
import CurvedArrow from "../assets/icons/curvedArrow";
import { TimelineLite, gsap, CSSPlugin, Power2, Expo, Power3 } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import $ from "jquery";

gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);

const RevealBorder = ({ children }) => {
  const revealRef = useRef(null);

  useEffect(() => {
    gsap.from(revealRef.current, {
      width: 0,
      duration: 0.8,
      ease: Power3.easeInOut,
      scrollTrigger: {
        trigger: revealRef.current,
        start: "top 70%",
      },
    });
  }, []);

  return <div ref={revealRef}>{children}</div>;
};

const RevealPhoto = ({ photo }) => {
  const revealRef = useRef(null);
  let container = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  useEffect(() => {
    const tl = new TimelineLite({
      scrollTrigger: {
        trigger: revealRef.current,
        start: "top 70%",
      },
    });
    tl.to(container, { duration: 0, visibility: "visible" })
      .to(imageReveal, { duration: 1.4, width: "0%", ease: Power2.easeInOut })
      .from(image, {
        duration: 1.4,
        scale: 1.6,
        ease: Power2.easeInOut,
        delay: -1.4,
      });
    console.log(revealRef.current);
  });

  return (
    <div className="container" ref={(el) => (container = el)}>
      <>
        <div className="img-container" ref={revealRef}>
          <img className="photo" ref={(el) => (image = el)} src={photo} />
        </div>
      </>
    </div>
  );
};

const RevealText = ({ text }) => {
  const revealRef = useRef(null);
  let textTarget = useRef(null);

  useEffect(() => {
    const results = Splitting({ target: textTarget, by: "lines" });
    results[0].lines.forEach((line, index) => {
      $(line).wrapAll("<div style=overflow:hidden;></div>");
      gsap.from(line, {
        y: "10vh",
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
  }, []);

  return (
    <div ref={revealRef}>
      <p ref={(el) => (textTarget = el)}>
        {text}
      </p>
    </div>
  );
};

const RevealTextTitle = ({ text }) => {
  const revealRef = useRef(null);
  let textTarget = useRef(null);

  useEffect(() => {
    const results = Splitting({ target: textTarget, by: "lines" });
    results[0].lines.forEach((line, index) => {
      $(line).wrapAll("<div style=overflow:hidden;></div>");
      gsap.from(line, {
        y: "10vh",
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
  }, []);

  return (
    <div ref={revealRef}>
      <h2 className="project-title" ref={(el) => (textTarget = el)}>
        {text}
      </h2>
    </div>
  );
};

const ProjectsDesktop = ({ projects }) => {
  // useEffect(() => {
  //     const target = document.querySelector(".text");
  //     const results = Splitting({ target: target, by: "lines" });
  //     // $("span").wrap(
  //     //   "<div class='line-wrap' style=overflow:hidden;height:100%;></div>"
  //     // );
  //     results[0].lines.forEach((line, index) => {
  //       line.forEach((word) => {
  //         gsap.from(word, {
  //           opacity: 0,
  //           delay: index / 4,
  //           scrollTrigger: {
  //             trigger: '.project',
  //             markers: true,
  //             start: "top 90%",
  //           },
  //         });
  //       });
  //     });
  // }, [])
  return (
    <StyledProjectsDesktop className="section-area Projects">
      <h1 className="projects-section-title">
        <div className="line-wrap">
          <div className="project-title-text">SELECTED</div>
        </div>
        <div className="line-wrap">
          <div className="project-title-text">WORK</div>
        </div>
      </h1>
      {projects.map((project) => (
        <Link key={project.id} to={"/Projects/" + project.id}>
          <RevealBorder>
            <div class="border"></div>
          </RevealBorder>
          <div className="project">
            <div className="project-info">
              <div className="top-info">
                <RevealText text={project.technologies} />
              </div>
              <CurvedArrow className="arrow" />
            </div>

            <div className="project-photo">
              <RevealPhoto
                photo={"https://strapi-z1gs.onrender.com" + project.coverPhoto}
              />
              {/* <h2 >{project.name}</h2> */}
              <RevealTextTitle text={project.name} />

            </div>
          </div>
        </Link>
      ))}
    </StyledProjectsDesktop>
  );
};

export default ProjectsDesktop;

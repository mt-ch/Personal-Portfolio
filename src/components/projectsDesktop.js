import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { StyledProjectsDesktop } from "../styled/components.styled";
import CurvedArrow from "../assets/icons/curvedArrow";
import { TimelineLite, gsap, CSSPlugin, Power2, Expo, Power3 } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import $ from "jquery";

gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);

const RevealBorder = ({ children, id }) => {
  const revealRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.refresh();
    gsap.from(revealRef.current, {
      width: 0,
      duration: 2.5,
      ease: Power3.easeInOut,
      scrollTrigger: {
        trigger: ".project" + id,
        start: "top 70%",
      },
    });
  }, []);
  return <div ref={revealRef}>{children}</div>;
};

const RevealPhoto = ({ photo, id }) => {
  const revealRef = useRef(null);
  let container = useRef(null);
  let image = useRef(null);
  let imageReveal = useRef(null);

  useEffect(() => {
    const tl = new TimelineLite({
      scrollTrigger: {
        trigger: ".project" + id,
        start: "top 70%",
        markers: true,
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
  });

  return (
    <div className="container" ref={(el) => (container = el)}>
      <>
        <div className="img-container" ref={revealRef}>
          <div class="img-container-after" ref={(el) => (imageReveal = el)}>
            <img className="photo" ref={(el) => (image = el)} src={photo} />
          </div>
        </div>
      </>
    </div>
  );
};

const RevealText = ({ text, id }) => {
  const revealRef = useRef(null);
  let textTarget = useRef(null);

  useEffect(() => {
    const results = Splitting({ target: textTarget, by: "lines" });
    results[0].lines.forEach((line, index) => {
      $(line).wrapAll("<div style=overflow:hidden;></div>");
      gsap.from(line, {
        duration: 0.8,
        y: "10vh",
        delay: index / 4,
        scrollTrigger: {
          trigger: ".project" + id,
          start: "top 70%",
        },
      });
      line.forEach((word) => {
        word.style.marginRight = ".25em";
      });
    });
  }, []);

  return (
    <div ref={revealRef}>
      <p
        ref={(el) => (textTarget = el)}
        style={{
          textTransform: "uppercase",
          lineHeight: ".95",
        }}
      >
        {text}
      </p>
    </div>
  );
};

const RevealTextTitle = ({ text, id }) => {
  const revealRef = useRef(null);
  let textTarget = useRef(null);

  useEffect(() => {
    const results = Splitting({ target: textTarget, by: "lines" });
    results[0].lines.forEach((line, index) => {
      $(line).wrapAll("<div style=overflow:hidden;height:100%;></div>");
      gsap.from(line, {
        duration: 2,
        y: "15vh",
        delay: index / 4,
        scrollTrigger: {
          trigger: ".project" + id,
          start: "top 70%",
        },
      });
      line.forEach((word) => {
        word.style.marginRight = ".25em";
      });
    });
  }, []);

  return (
    <div ref={revealRef}>
      <h2
        className="project-title"
        ref={(el) => (textTarget = el)}
        style={{
          textTransform: "uppercase",
        }}
      >
        {text}
      </h2>
    </div>
  );
};

const ProjectsDesktop = ({ projects }) => {
  useEffect(() => {
    ScrollTrigger.refresh(true);
    gsap.from(".project-title-text", {
      duration: 2,
      y: "12vh",
      stagger: {
        amount: 0.3,
      },
      scrollTrigger: {
        trigger: ".project-title-text",
        start: "top 80%",
      },
      ease: Power3.easeInOut,
    });
  }, []);

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
        <Link
          className={"project" + project.id}
          key={project.id}
          to={"/Projects/" + project.id}
        >
          <RevealBorder id={project.id}>
            <div class="border"></div>
          </RevealBorder>
          <div className="project">
            <div className="project-info">
              <div className="top-info">
                <RevealText id={project.id} text={project.technologies} />
              </div>
              <CurvedArrow className="arrow" />
            </div>

            <div className="project-photo">
              <RevealPhoto
                photo={"https://strapi-z1gs.onrender.com" + project.coverPhoto}
                id={project.id}
              />
              <RevealTextTitle id={project.id} text={project.name} />
            </div>
          </div>
        </Link>
      ))}
    </StyledProjectsDesktop>
  );
};

export default ProjectsDesktop;

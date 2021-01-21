import React, { useEffect, useRef } from "react";
import { StyledProjectsDesktop } from "../styled/components.styled";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import $ from "jquery";
import Arrow from "../assets/icons/arrow";

gsap.registerPlugin(ScrollTrigger);

const RevealArrow = ({ id }) => {
  const arrowRef = useRef(null);
  useEffect(() => {
    gsap.from(arrowRef.current, {
      delay: 1,
      opacity: 0,
      duration: 2,
      ease: "Power3.easeInOut",
      scrollTrigger: {
        trigger: ".project" + id,
        start: "top 95%",
      },
    });
  }, []);
  return (
    <div ref={arrowRef}>
      <Arrow className={"arrow"} />
    </div>
  );
};

const RevealBorder = ({ id }) => {
  const borderRef = useRef(null);
  useEffect(() => {
    gsap.from(borderRef.current, {
      width: 0,
      duration: 3,
      ease: "Power3.easeInOut",
      scrollTrigger: {
        trigger: ".project" + id,
        // markers: true,
        start: "top 95%",
      },
    });
  }, []);
  return <div ref={borderRef} className="border"></div>;
};

const RevealPhoto = ({ photo, id }) => {
  let imageRef = useRef(null);

  useEffect(() => {
    gsap.from(imageRef.current, {
      duration: 1.6,
      opacity: 0,
      delay: 0.4,
      y: 10,
      ease: "Power3.easeInOut",
      scrollTrigger: {
        trigger: ".project" + id,
        start: "top 95%",
      },
    });
  }, []);

  return (
    <div ref={imageRef}>
      <img class="photo" src={photo} />
    </div>
  );
};

const RevealSubText = ({ text, id }) => {
  const subTextRef = useRef(null);
  let subTextTarget = useRef(null);

  useEffect(() => {
    const subText = Splitting({ target: subTextTarget, by: "lines" });
    subText[0].lines.forEach((line) => {
      $(line).wrapAll("<div style=overflow:hidden;></div>");
      gsap.from(line, {
        duration: 1.5,
        yPercent: 150,
        scrollTrigger: {
          trigger: ".project" + id,
          start: "top 95%",
        },
      });
      line.forEach((word) => {
        word.style.marginRight = ".25em";
      });
    });
  }, []);

  return (
    <div ref={subTextRef}>
      <p class="project-tech" ref={(el) => (subTextTarget = el)}>
        {text}
      </p>
    </div>
  );
};

const RevealTextTitle = ({ text, id }) => {
  const titleRef = useRef(null);
  let titleTarget = useRef(null);

  useEffect(() => {
    const title = Splitting({ target: titleTarget, by: "lines" });
    title[0].lines.forEach((line) => {
      $(line).wrapAll("<div style=overflow:hidden;></div>");
      gsap.from(line, {
        duration: 1.5,
        yPercent: 150,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".project" + id,
          start: "top 95%",
        },
      });
      line.forEach((word) => {
        word.style.marginRight = ".25em";
      });
    });
  }, []);

  return (
    <div ref={titleRef}>
      <h2 className="project-title" ref={(el) => (titleTarget = el)}>
        {text}
      </h2>
    </div>
  );
};

const ProjectsDesktop = ({ projects }) => {
  useEffect(() => {
    gsap.from(".project-header-text", {
      duration: 3,
      yPercent: 150,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".projects-section-title",
        start: "top 95%",
      },
      ease: "Power3.easeInOut",
    });
    gsap.from(".border-project-header", {
      duration: 2,
      delay: 1.3,
      width: 0,
      ease: "Power3.easeInOut",
      scrollTrigger: {
        trigger: ".projects-section-title",
        start: "top 95%",
      },
    });
  }, []);

  return (
    <StyledProjectsDesktop id="section-work">
      <div class="project-section-header">
        <div className="projects-section-title">
          <div className="line-wrap">
            <h1 className="project-header-text">WORK</h1>
          </div>
        </div>
        <div className="line-wrap">
          <p className="project-header-text">/02</p>
        </div>
      </div>
      <div className="border-project-header border"></div>
      {projects.map((project) => (
        <a
          href={project.website}
          className={"project" + project.id}
          key={project.id}
        >
          <div className="project">
            <div className="project-info">
              <RevealTextTitle id={project.id} text={project.name} />
              <div class="lower-info">
                <RevealSubText id={project.id} text={project.technologies} />
                <RevealArrow id={project.id} />
              </div>
            </div>

            <div className="project-photo">
              <RevealPhoto
                id={project.id}
                photo={"https://strapi-z1gs.onrender.com" + project.coverPhoto}
              />
            </div>
          </div>
          <RevealBorder id={project.id} />
        </a>
      ))}
    </StyledProjectsDesktop>
  );
};

export default ProjectsDesktop;

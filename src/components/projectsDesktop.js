import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { StyledProjectsDesktop } from "../styled/components.styled";
import { TimelineLite, gsap, Power3 } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";
import $ from "jquery";
gsap.registerPlugin(CSSRulePlugin, ScrollTrigger);

const RevealBorder = ({ id }) => {
  const borderRef = useRef(null);

  useEffect(() => {
    gsap.from(borderRef.current, {
      width: 0,
      duration: 3,
      ease: Power3.easeInOut,
      scrollTrigger: {
        trigger: ".project" + id,
        start: "top 95%",
      },
    });
  }, []);
  return <div ref={borderRef} class="border"></div>;
};

const RevealPhoto = ({ photo, id }) => {
  let containerRef = useRef(null);
  let imageRef = useRef(null);
  let imageReveal = useRef(null);

  useEffect(() => {
    // const tl = new TimelineLite({
    //   scrollTrigger: {
    //     trigger: ".project" + id,
    //     markers: true,
    //     start: "top 95%",
    //   },
    // });
    // ScrollTrigger.refresh(true);
    // tl.set(containerRef.current, {
    //   visibility: "visible",
    // })
    //   .to(imageReveal.current, {
    //     duration: 2,
    //     height: "0%",
    //     ease: Power3.easeInOut,
    //   })
    //   .from(imageRef.current, {
    //     duration: 1.5,
    //     scale: 1.5,
    //     ease: Power3.easeInOut,
    //     delay: -1.5,
    //   });

    gsap.from(imageRef.current, {
      duration: 1.6,
      opacity: 0,
      y: 10,
      ease: Power3.easeInOut,
      scrollTrigger:{
        trigger: ".project" + id,
        start: "top 95%",
      }
    });
  });

  return (
    // <div className="container-wrapper" ref={(el) => (containerRef = el)}>
    //   <>
    //     <div className="img-container">
    //         <div ref={(el) => (imageReveal = el)} class="revealImg"></div>
    //         <img ref={(el) => (imageRef = el)} src={photo} />
    //     </div>
    //   </>
    // </div>
    <div ref={imageRef} >
      <img class='photo' src={photo} />
    </div>
  );
};

const RevealSubText = ({ text, id }) => {
  const subTextRef = useRef(null);
  let subTextTarget = useRef(null);

  useEffect(() => {
    const subText = Splitting({ target: subTextTarget, by: "lines" });
    subText[0].lines.forEach((line) => {
      $(line).wrapAll("<div style=overflow:hidden;height:100%;></div>");
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
      <p ref={(el) => (subTextTarget = el)}>{text}</p>
    </div>
  );
};

const RevealTextTitle = ({ text, id }) => {
  const titleRef = useRef(null);
  let titleTarget = useRef(null);

  useEffect(() => {
    const title = Splitting({ target: titleTarget, by: "lines" });
    title[0].lines.forEach((line) => {
      $(line).wrapAll("<div style=overflow:hidden;height:100%;></div>");
      gsap.from(line, {
        duration: 1.5,
        yPercent: 150,
        stagger: 0.4,
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
      ease: Power3.easeInOut,
    });
    gsap.from(".project-border-end", {
      width: 0,
      duration: 3,
      ease: Power3.easeInOut,
      scrollTrigger: {
        trigger: ".project-border-end",
        start: "top 95%",
      },
    });
    ScrollTrigger.update();
  }, []);

  return (
    <StyledProjectsDesktop id='section-work'>
      <h1 className="projects-section-title">
        <div className="line-wrap">
          <div className="project-header-text">SELECTED</div>
        </div>
        <div className="line-wrap">
          <div className="project-header-text">WORK</div>
        </div>
      </h1>
      {projects.map((project) => (
        <Link
          className={"project" + project.id}
          key={project.id}
          to={"/Projects/" + project.id}
        >
          <RevealBorder id={project.id} />
          <div className="project">
            <div className="project-info">
              <RevealTextTitle id={project.id} text={project.name} />
              <RevealSubText id={project.id} text={project.technologies} />
            </div>

            <div className="project-photo">
              <RevealPhoto
                id={project.id}
                photo={"https://strapi-z1gs.onrender.com" + project.coverPhoto}
              />
            </div>
          </div>
        </Link>
      ))}
      <div class="border project-border-end"></div>
    </StyledProjectsDesktop>
  );
};

export default ProjectsDesktop;

import React, { useEffect } from "react";
import Cross from "../assets/icons/cross";
import { gsap } from "gsap";
import { enableBodyScroll } from "body-scroll-lock";
import { RevealTextNoTrigger, RevealTitleNoTrigger } from "./animations";
import { mouseOverButton, mouseLeaveButton } from "../functions/interactions";

const ProjectPopOut = ({ setProjectActive, project }) => {
  const body = document.body;

  const closeProject = () => {
    gsap.to(".project-pop-out", {
      duration: 1.5,
      xPercent: 0,
      ease: "Power3.easeInOut",
      onComplete: closeModal,
    });
  };

  function closeModal() {
    enableBodyScroll(body);
    return setProjectActive(false);
  }

  useEffect(() => {
    gsap.to(".project-pop-out", {
      duration: 1.5,
      xPercent: -100,
      ease: "Power3.easeInOut",
    });
    gsap.from(".pop-out-text", {
      duration: 2,
      yPercent: 200,
      delay: 0.5,
      stagger: 0.1,
      ease: "Power3.easeInOut",
    });
    gsap.to(".box", {
      duration: 2.5,
      stagger: 0.5,
      yPercent: -100,
      ease: "Power3.easeInOut",
    });
  }, []);

  return (
    <div className="project-pop-out">
      <div>
        <div class="project-pop-out-header">
          <RevealTitleNoTrigger text={project.name} />
          <a onClick={closeProject}>
            <Cross className="project-pop-out-cross" />
          </a>
        </div>
        <div class="project-pop-out-info">
          <div class="line-wrap">
            <p className="project-pop-out-tech pop-out-text">
              {project.technologies}
            </p>
          </div>
          <RevealTextNoTrigger text={project.description} />
        </div>
        <div class="project-pop-out-buttons">
          <a
            href={project.git}
            className="nav-link project-pop-out-git"
            onMouseOver={() => mouseOverButton(".u-git")}
            onMouseLeave={() => mouseLeaveButton(".u-git")}
          >
            <div class="line-wrap">
              <p className="pop-out-text">
                <strong>GITHUB</strong>
              </p>
            </div>
            <span class="nav-underline">
              <span class="underline u-git"></span>
            </span>
          </a>
          {/* <a
            href={project.website}
            className="nav-link"
            onMouseOver={() => mouseOverButton(".u-web")}
            onMouseLeave={() => mouseLeaveButton(".u-web")}
          >
            <div class="line-wrap">
              <p className="pop-out-text">
                <strong>WEBSITE</strong>
              </p>
            </div>
            <span class="nav-underline">
              <span class="underline u-web"></span>
            </span>
          </a> */}
        </div>
      </div>

      <div className="project-pop-out-photos">
        {project.photos.map((photo) => (
          <div class="wrapper-img">
            <div class="box"></div>
            <div>
              <img
                className="project-pop-out-photo"
                src={"https://strapi-z1gs.onrender.com" + photo.url}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPopOut;

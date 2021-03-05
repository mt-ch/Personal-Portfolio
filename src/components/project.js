import React, { useState } from "react";
import { StyledProject } from "../styled/projects.styled";
import {
  RevealTextTitle,
  RevealSubText,
  RevealBorder,
  RevealPhoto,
} from "./animations";
import ProjectPopOut from "./projectPopOut";
import { disableBodyScroll } from "body-scroll-lock";
import { useMediaQueries } from "@react-hook/media-query";
import Arrow from "../assets/icons/arrow";

const Project = ({ project }) => {
  const [projectActive, setProjectActive] = useState(false);
  const [hoverProject, setHoverProject] = useState(false);

  const { matches } = useMediaQueries({
    width: "(min-width: 700px)",
  });

  const openProject = () => {
    disableBodyScroll(document.body);
    return setProjectActive(true);
  };

  return (
    <StyledProject>
      <a
        className={"project" + project.id}
        key={project.id}
        onClick={openProject}
        onMouseOver={() => setHoverProject(true)}
        onMouseLeave={() => setHoverProject(false)}
      >
        <div className="project">
          <div className="project-info">
              <RevealTextTitle id={project.id} text={project.name} />
              
            {matches.width ? null : (
              <RevealSubText id={project.id} text={project.technologies} />
            )}
            {matches.width ? (hoverProject ? <Arrow className={"arrow"} /> : null) : null}
          </div>
          <div class="project-info-side">
            <RevealPhoto
              id={project.id}
              photo={"https://strapi-z1gs.onrender.com" + project.coverPhoto}
            />
            {matches.width ? (
              <RevealSubText id={project.id} text={project.technologies} />
            ) : null}
          </div>
        </div>
        <RevealBorder id={project.id} />
      </a>
      {projectActive ? (
        <ProjectPopOut project={project} setProjectActive={setProjectActive} />
      ) : null}
    </StyledProject>
  );
};

export default Project;

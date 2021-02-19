import React, { useEffect, useState } from "react";
import { StyledProject } from "../styled/projects.styled";
import {
  RevealTextTitle,
  RevealSubText,
  RevealBorder,
  RevealPhoto,
} from "./animations";
import ProjectPopOut from "./projectPopOut";
import { disableBodyScroll } from "body-scroll-lock";

const Project = ({ project }) => {
  const [projectActive, setProjectActive] = useState(false);
  const body = document.body;

  const openProject = () => {
    disableBodyScroll(body);
    return setProjectActive(true);
  };

  return (
    <StyledProject>
      <a
        className={"project" + project.id}
        key={project.id}
        onClick={openProject}
      >
        <div className="project">
          <div className="project-info">
            <RevealTextTitle id={project.id} text={project.name} />
            <div class="lower-info">
              <RevealSubText id={project.id} text={project.technologies} />
            </div>
          </div>
          <RevealPhoto
            id={project.id}
            photo={"https://strapi-z1gs.onrender.com" + project.coverPhoto}
          />
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

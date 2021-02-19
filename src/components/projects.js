import React, { useEffect, useState } from "react";
import { StyledProjects } from "../styled/projects.styled";
import {
  RevealBorder,
  RevealSectionTitle,
} from "./animations";
import Project from "./project";

const Projects = ({ projects }) => {
  return (
    <StyledProjects id="section-work">
      <RevealSectionTitle text={"WORK"} id={".projectBorder"} />
      <div className="projectBorder">
        <RevealBorder id={"Border"} />
      </div>
      {projects.map((project) => (
        <Project project={project} />
      ))}
    </StyledProjects>
  );
};

export default Projects;

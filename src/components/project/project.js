import React from "react";
import {StyledProject} from "./project.styled";

const Project = ({ project, openProject }) => {
    console.log(openProject)
if(openProject)
  return (
    <StyledProject>
      <p>
        <strong>{project.projectName}</strong>
      </p>
      <p>{project.Roles}</p>
      <p>{project.Technologies}</p>
      <p>{project.description}</p>
      <a href="">View Live</a>
      <a href="">GitHub</a>
    </StyledProject>
  );
  else if(!openProject){
      return null;
  }
};

export default Project;

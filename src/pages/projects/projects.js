import React, { useEffect, useState } from "react";
import { StyledProject } from "./projects.styled";

import GetProjects from "../../utils/getProjects";

import Accordion from "../../components/accordion/accordion";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    GetProjects(setProjects);
  }, []);
  return (
    <StyledProject>
      {projects.map(project => (
        <Accordion
          title={project.projectName}
          roles={project.Roles}
          technologies={project.Technologies}
          description={project.description}
        />
      ))}
    </StyledProject>
  );
};

export default Projects;

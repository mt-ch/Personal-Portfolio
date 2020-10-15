import React, { useEffect, useState } from "react";
import { StyledProject } from "./projects.styled";

import GetProjects from "../../utils/getProjects";

import Accordion from "../../components/accordion/accordion";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    GetProjects()
    .then(data => setProjects(data))
  }, []);
  return (
    <StyledProject>
      {projects.map(project => (
        <Accordion
          title={project.name}
          roles={project.roles}
          technologies={project.technologies}
          description={project.description}
        />
      ))}
    </StyledProject>
  );
};

export default Projects;

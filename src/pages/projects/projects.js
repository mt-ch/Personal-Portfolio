import React, { useEffect, useState } from "react";

import GetProjects from "../../utils/getProjects";

import Accordion from "../../components/accordion/accordion";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    GetProjects()
    .then(data => setProjects(data))
  }, []);
  return (
    <div>
      {projects.map(project => (
        <Accordion
          title={project.name}
          roles={project.roles}
          technologies={project.technologies}
          description={project.description}
          github={project.git}
          website={project.website}
          coverPhoto={project.coverPhoto}
        />
      ))}
    </div>
  );
};

export default Projects;

import React, { useEffect, useState } from "react";
import GetProjects from "../../utils/getProjects";
import Accordion from "../../components/accordion/accordion";
import styled from "styled-components";
import Shapes from "../../components/shapes";

const StyledProjects = styled.div`
  .shapes {
    height: 30vh;
    background-color: green;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: solid black 1px;

    .projects-title {
      color: white;
      font-weight: bold;
      font-size: 5rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.mobile}) {
    .projects {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 3fr));
    }
  }
`;

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    GetProjects().then(data => setProjects(data));
  }, []);
  return (
    <StyledProjects>
      <Shapes title={"Projects"} />
      <div className="projects">
        {projects.map(project => (
          <Accordion
            title={project.name}
            roles={project.roles}
            technologies={project.technologies}
            description={project.description}
            github={project.git}
            website={project.website}
            coverPhoto={project.coverPhoto}
            photoAlbum={project.photos}
          />
        ))}
      </div>
    </StyledProjects>
  );
};

export default Projects;

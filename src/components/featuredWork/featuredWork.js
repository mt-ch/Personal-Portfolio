import React, { useEffect, useState } from "react";
import { StyledFeatured } from "./featuredWork.styled";
import GetFeaturedProjects from "../../utils/getFeaturedProjects";
import Accordion from "../../components/accordion/accordion";

const FeaturedWork = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    GetFeaturedProjects().then(data => setProjects(data));
  }, []);
  return (
    <StyledFeatured>
      <p className='featured-title'><strong>Featured Work</strong></p>
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
    </StyledFeatured>
  );
};

export default FeaturedWork;

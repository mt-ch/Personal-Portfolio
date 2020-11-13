import React, { useEffect, useState } from "react";
import GetProjects from "../functions/getProjects";
import Accordion from "../components/accordion";
import Layout from "../components/layout";
import { StyledProjects } from "../styled/projects.styled";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    AOS.init();
    GetProjects(setProjects);
  }, []);
  return (
    <StyledProjects>
      <div
        class="text"
        data-aos="fade-up"
        data-aos-offset="250"
        data-aos-delay="100"
        data-aos-duration="800"
        data-aos-easing="ease"
      >
        <h2 className="about-title">
          <small> (002) </small> MY WORK
        </h2>
      </div>
      {/* {projects.map((project) => (
        <Accordion
          title={project.name}
          roles={project.roles}
          technologies={project.technologies}
          description={project.description}
          github={project.git}
          website={project.website}
          coverPhoto={project.coverPhoto}
          photoAlbum={project.photos}
          text={"black"}
          link={project.id}
        />
      ))} */}
    </StyledProjects>
  );
};

export default Projects;

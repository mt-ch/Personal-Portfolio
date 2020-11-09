import React, { useEffect, useState } from "react";

import GetProjectDetail from "../../utils/getProjectDetail";
import { StyledProject } from "./projectDetail.styled";
import Footer from "../../components/footer/footer";
import Shapes from "../../components/shapes";

import Github from "../../assets/icons/github";
import Website from "../../assets/icons/website";

const ProjectDetail = ({ match }) => {
  const [project, setProject] = useState([]);
  useEffect(() => {
    GetProjectDetail(match.params.id).then((data) => setProject(data));
  }, []);

  return (
    <StyledProject>
      {project.map((project) => (
        <div key={project.id}>
          <Shapes title={project.name} />
          <div className="project-detail">
            <p>
              <strong>{project.roles}</strong>
            </p>
            <p>
              <strong>{project.technologies}</strong>
            </p>
            <p className="project-desc">{project.description}</p>
            <a href={project.website}>
              <p className="project-link-text">View</p>
              <Website width={"35"} height={"35"} fill={"black"} />
            </a>
            <a href={project.github}>
              <p className="project-link-text">GitHub</p>
              <Github width={"35"} height={"35"} fill={"black"} />
            </a>
          </div>
          <div className="project-photos">
            {project.photos.map((photo) => (
              <img
                className="gallery"
                key={photo.id}
                src={"http://localhost:1337" + photo.url}
              />
            ))}
          </div>
        </div>
      ))}
      <Footer />
    </StyledProject>
  );
};

export default ProjectDetail;

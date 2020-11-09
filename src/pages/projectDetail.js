import React, { useEffect, useState } from "react";

import GetProjectDetail from "../functions/getProjectDetail";
import { StyledProject } from "./projectDetail/projectDetail.styled";
import Layout from "../components/layout";
import Github from "../assets/icons/github";
import Website from "../assets/icons/website";

const ProjectDetail = ({ match }) => {
  const [project, setProject] = useState([]);
  useEffect(() => {
    GetProjectDetail(match.params.id).then((data) => setProject(data));
  }, []);

  return (
    <Layout isHome={false} color={'white'} text={'black'}>
      <StyledProject>
        {project.map((project) => (
          <div key={project.id}>
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
      </StyledProject>
    </Layout>
  );
};

export default ProjectDetail;

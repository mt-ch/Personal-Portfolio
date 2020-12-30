import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import { StyledProject } from "../styled/components.styled";
import GetProjectDetail from "../functions/getProjectDetail";
import { useParams, useHistory } from "react-router-dom";
import Title from "../components/title";
import CurvedArrow from "../assets/icons/curvedArrow";

const ProjectDetail = () => {
  const [project, setProject] = useState([]);
  let { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    GetProjectDetail(id).then((data) => setProject(data));
  }, []);

  return (
    <>
      <Layout>
        <StyledProject>
          <a
            href={null}
            onClick={() => {
              history.goBack();
            }}
          >
            <CurvedArrow className="arrow" />
          </a>
          {project.map((project) => (
            <div className="project">
              <Title title={project.name} />

              <div className="info-wrapper">
                <div className="info">
                  <div className="roles">
                    <p>{project.roles}</p>
                    <p>{project.technologies}</p>
                  </div>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-links">
                    <a href={project.git}>
                      <p className="project-link">Github</p>
                    </a>
                    <a href={project.website}>
                      <p className="project-link">Website</p>
                    </a>
                  </div>
                </div>
                <p className="info-end">Photos</p>
              </div>

              <div className="photos">
                {project.photos.map((photo) => (
                  <img
                    className="photo"
                    src={"https://strapi-z1gs.onrender.com" + photo.url}
                  />
                ))}
              </div>
            </div>
          ))}
        </StyledProject>
      </Layout>
    </>
  );
};

export default ProjectDetail;

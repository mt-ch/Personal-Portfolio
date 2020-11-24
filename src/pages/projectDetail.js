import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import GetProjectDetail from "../functions/getProjectDetail";

const StyledProject = styled.div`
  height: 100%;

  .project {
    position: relative;
    width: 100%;
    height: 100vh;
    padding-top: 10vh;
/* 
    .info{
      display: flex;
    } */
    img {
      /* position: relative; */
      height: 40vh;
      width: 100%;
      object-fit: cover;
      padding: 6vh 0 0 0;
    }
  }
`;

const ProjectDetail = ({ match }) => {
  const [project, setProject] = useState([]);
  useEffect(() => {
    GetProjectDetail(match.params.id).then((data) => setProject(data));
  }, []);
  return (
    <>
      <Layout>
        <StyledProject>
          {project.map((project) => (
            <div className="project">
              <h2>{project.name}</h2>
              <div className='info'>
                <div className='roles'>
                  <p>{project.roles}</p>
                  <p>{project.technologies}</p>
                </div>
                <p>{project.description}</p>
              </div>

              {project.photos.map((photo) => (
                <img src={"https://strapi-z1gs.onrender.com" + photo.url} />
              ))}

              {/* <div className="project-links">
                <a>
                  <p className="project-link">Github</p>
                </a>
                <a>
                  <p className="project-link">Website</p>
                </a>
              </div> */}
            </div>
          ))}
        </StyledProject>
      </Layout>
    </>
  );
};

export default ProjectDetail;

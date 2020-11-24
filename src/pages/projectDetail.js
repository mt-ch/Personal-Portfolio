import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import GetProjectDetail from "../functions/getProjectDetail";

const StyledProject = styled.div`
  height: 100vh;
  /* padding: 20vh ${({ theme }) => theme.padding} 3vh
    ${({ theme }) => theme.padding};

    .project{
      img {
        height: 50vh;
        width: 100%;
        object-fit: cover;
        padding: 6vh 0 0 0;
      }
    } */
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
              {/* <img src={'http://localhost:1337' + project.coverPhoto}/> */}
              <h2>{project.name}</h2>
              <p>{project.roles}</p>
              <p>{project.description}</p>
              {project.photos.map((photo) => (
                <img src={'https://strapi-z1gs.onrender.com' + photo.url}/>
              ))}
            </div>
          ))}
        </StyledProject>
      </Layout>
    </>
  );
};

export default ProjectDetail;

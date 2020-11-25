import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import GetProjectDetail from "../functions/getProjectDetail";

const StyledProject = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  padding-bottom: 1vh;

  .project {
    position: relative;
    width: 100%;
    height: 100%;
    padding-top: 10vh;

    .info {
      padding-bottom: 1vh;
      margin-bottom: 2vh;
      .roles {
        padding: 1vh 0 5vh;
      }

      .project-links {
        margin-top: 5vh;
        display: flex;
        a {
          .project-link {
            text-align: center;
            text-transform: uppercase;
            border: 2px ${({ theme }) => theme.black} solid;
            padding: 0.25em 0.5em 0.25em 0.5em;
            border-radius: 2em;
            color: ${({ theme }) => theme.black};
            margin-right: 3vw;
          }

          .project-link:hover {
            background-color: ${({ theme }) => theme.black};
            color: ${({ theme }) => theme.white};
          }
        }
      }
    }
    .info-end {
      padding: 5vh 0 1vh 0;
      margin-bottom: 1vh;
      text-align: end;
      border-bottom: 1px solid black;
    }
    img {
      position: relative;
      z-index: 0;
      height: 40vh;
      width: 100%;
      object-fit: cover;
      padding: 1vh 0;
    }
  }

  @media (min-width: 500px) {
    .info {
      display: grid;
      grid-template-areas: "roles desc" "links desc";
      grid-template-columns: 1fr 2fr;
      grid-template-rows: 0fr 1fr;
      grid-gap: 2vh;
      padding: 0;
      padding-top: 2vh;

      .project-desc {
        grid-area: desc;
      }

      .project-links {
        grid-area: links;
        padding: 0;
      }

      .roles {
        grid-area: roles;
        padding: 0;
      }
    }

    .photos {
      display: grid;
      /* align-items: center; */
      grid-template-columns: repeat(auto-fit, minmax(1fr, 1fr));
      grid-gap: 1rem;
      grid-auto-flow: row;
      img:last-child{
        grid-column: span 2;
      }
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
              <h3>{project.name}</h3>
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

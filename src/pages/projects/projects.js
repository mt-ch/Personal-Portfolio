import React, { useEffect, useState } from "react";
import { StyledProject } from "./projects.styled";
// import Project from '../../components/project/project';

async function GetProjects(setProjects) {
  const parseJSON = resp => (resp.json ? resp.json() : resp);
  const checkStatus = resp => {
    if (resp.status >= 200 && resp.status < 300) {
      return resp;
    }
    return parseJSON(resp).then(resp => {
      throw resp;
    });
  };
  const headers = {
    "Content-Type": "application/json"
  };

  try {
    const projects = await fetch("http://localhost:1337/projects", {
      method: "GET",
      headers: headers
    })
      .then(checkStatus)
      .then(parseJSON);
    return setProjects(projects);
  } catch (error) {
    return console.error(error);
  }
}

const Projects = ({}) => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    GetProjects(setProjects);
  }, []);
  return (
    <StyledProject>
      {projects.map(project => (
        <div key={project.id}>
          {/* <img src="http://localhost:1337/uploads/large_pink_Flower_76cea52f86.jpg" /> */}
          <div className="project-info">
            <div>
              <a onClick={null}>
                <p>
                  <strong>{project.projectName}</strong>
                </p>
                <svg
                  width="25px"
                  height="25px"
                  x="0px"
                  y="0px"
                  viewBox="3 3 17 17"
                >
                  <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
                </svg>
              </a>
              <p>{project.Roles}</p>
              <p>{project.Technologies}</p>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
          {/* <Project project={project} openProject={openProject}/> */}
        </div>
      ))}
    </StyledProject>
  );
};

export default Projects;

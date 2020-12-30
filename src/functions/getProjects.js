import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function CreateProjectData(
  id,
  name,
  roles,
  technologies,
  description,
  coverPhoto,
  photos,
  git,
  website
) {
  return {
    id,
    name,
    roles,
    technologies,
    description,
    coverPhoto,
    photos,
    git,
    website
  };
}

async function GetProjects() {
  let projectData = [];
  const url = "https://strapi-z1gs.onrender.com/projects";
  const response = await fetch(url);
  const data = await response.json();

  for (const {
    id: projectId,
    Title: name,
    Roles: roles,
    Technologies: technologies,
    Description: desc,
    Github: git,
    Site: web,
    CoverPhoto: {
      formats: {
        medium: { url: coverPhoto }
      }
    },
    Photos: photos
  } of data) {
    projectData.push(
      CreateProjectData(
        projectId,
        name,
        roles,
        technologies,
        desc,
        coverPhoto,
        photos,
        git,
        web
      )
    );
  }
  ScrollTrigger.refresh(true);
  return projectData;
}

export default GetProjects;
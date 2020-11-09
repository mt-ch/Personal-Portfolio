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

async function GetProjects(setProjects) {
  let projectData = [];
  const url = "http://localhost:1337/projects";
  const response = await fetch(url);
  const data = await response.json();

  for (const {
    id: projectId,
    name: name,
    roles: roles,
    technologies: technologies,
    description: desc,
    github: git,
    liveUrl: web,
    coverPhoto: {
      formats: {
        medium: { url: coverPhoto }
      }
    },
    photos: photos
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
  return setProjects(projectData);
}

export default GetProjects;
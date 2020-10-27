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
  const url = "http://localhost:1337/projects";
  const response = await fetch(url);
  const data = await response.json();

  for (const {
    id: projectId,
    projectName: name,
    Roles: roles,
    Technologies: technologies,
    description: desc,
    github: git,
    website: web,
    coverPhoto: {
      formats: {
        medium: { url: coverPhoto }
      }
    },
    projectPhotos: photos
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
  return projectData;
}

export default GetProjects;

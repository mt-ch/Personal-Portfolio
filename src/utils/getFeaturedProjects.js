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
    website,
  };
}

async function GetFeaturedProjects() {
  let projectData = [];
  const url = "http://localhost:1337/featured-projects";
  const response = await fetch(url);
  const data = await response.json();
  const { projects } = data;

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
        medium: { url: coverPhoto },
      },
    },
    projectPhotos: photos,
  } of projects) {
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

export default GetFeaturedProjects;

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

async function GetFeaturedProjects(setFeatured) {
  let projectData = [];
  const url = "http://localhost:1337/featured-projects";
  const response = await fetch(url);
  const data = await response.json();
  const { projects } = data;

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
        medium: { url: coverPhoto },
      },
    },
    photos: photos,
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
  return setFeatured(projectData);
}

export default GetFeaturedProjects;
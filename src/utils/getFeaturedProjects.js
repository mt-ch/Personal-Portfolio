function CreateProjectData(
  name,
  roles,
  technologies,
  description,
  coverPhoto,
  git,
  website
) {
  return { name, roles, technologies, description, coverPhoto, git, website };
}

async function GetFeaturedProjects() {
  let projectData = [];

  const url = "http://localhost:1337/featured-projects";
  const response = await fetch(url);
  const data = await response.json();
  const { projects } = data;
  for (const {
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
    }
  } of projects) {
    projectData.push(
      CreateProjectData(name, roles, technologies, desc, coverPhoto, git, web)
    );
  }

  return projectData;
}

export default GetFeaturedProjects;

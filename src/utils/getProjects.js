function CreateProjectData(name, roles, technologies, description, coverPhoto) {
  return { name, roles, technologies, description, coverPhoto };
}

async function GetProjects(setProjects) {
  let projectData = [];

  const url = "http://localhost:1337/projects";
  const response = await fetch(url);
  const data = await response.json();

  for (const {
    projectName: name,
    Roles: roles,
    Technologies: technologies,
    description: desc,
    coverPhoto: { url: url }
  } of data) {
    projectData.push(CreateProjectData(name, roles, technologies, desc, url));
  }
  return projectData;
}

export default GetProjects;

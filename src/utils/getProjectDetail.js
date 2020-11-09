// Function to grab single project data
async function GetProjectDetail(id) {
  let projectData = [];
  const url = "http://localhost:1337/projects/" + id;
  const response = await fetch(url);
  const data = await response.json();
  const {
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
  } = data;
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
  return projectData;
}

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

export default GetProjectDetail;

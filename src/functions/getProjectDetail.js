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

async function GetProjectDetail(id) {
  let projectData = [];
  const url = "https://strapi-z1gs.onrender.com/projects/" + id;
  const response = await fetch(url);
  const data = await response.json();
  const {
    id: projectId,
    Title: name,
    Roles: roles,
    Technologies: technologies,
    Description: desc,
    Github: git,
    Site: web,
    CoverPhoto: {
      formats: {
        medium: { url: coverPhoto },
      },
    },
    Photos: photos,
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

export default GetProjectDetail;

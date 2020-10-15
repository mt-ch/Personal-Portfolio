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
    console.log(projects);
    // Store in state using react hooks
    return setProjects(projects);
  } catch (error) {
    return console.error(error);
  }
}

export default GetProjects;

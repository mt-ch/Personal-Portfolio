async function GetLanding(setLanding) {
  const parseJSON = (resp) => (resp.json ? resp.json() : resp);
  const checkStatus = (resp) => {
    if (resp.status >= 200 && resp.status < 300) {
      return resp;
    }
    return parseJSON(resp).then((resp) => {
      throw resp;
    });
  };
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    const landings = await fetch("http://localhost:1337/landing", {
      method: "GET",
      headers: headers,
    })
      .then(checkStatus)
      .then(parseJSON);
    return setLanding(landings);
  } catch (error) {
    return console.error(error);
  }
}

export default GetLanding;

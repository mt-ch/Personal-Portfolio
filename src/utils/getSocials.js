async function GetSocials() {
  // Parses the JSON returned by a network request
  const parseJSON = (resp) => (resp.json ? resp.json() : resp);

  // Checks if a network request came back fine, and throws an error if not
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
    const socials = await fetch("http://localhost:1337/socials", {
      method: "GET",
      headers: headers,
    })
      .then(checkStatus)
      .then(parseJSON);
    return socials;
  } catch (error) {
    return console.error(error);
  }
}

export default GetSocials;

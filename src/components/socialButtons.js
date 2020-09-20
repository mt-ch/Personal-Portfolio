import React from "react";

// Icons
import github from '../assets/icons/github.png';
import linkedin from '../assets/icons/linkedin.png';
import breifcase from '../assets/icons/breifcase.png';

async function getSocialLinks() {
  // Parses the JSON returned by a network request
  const parseJSON = resp => (resp.json ? resp.json() : resp);

  // Checks if a network request came back fine, and throws an error if not
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
    const socials = await fetch("http://localhost:1337/socials", {
      method: "GET",
      headers: headers
    })
      .then(checkStatus)
      .then(parseJSON);
      return socials
  } catch (error) {}
}

const socialButtons = () => {
  getSocialLinks();
  return (
    <div className='socials'>
      <a href=''>
        <img className="icon" src={github} />
      </a>
      <a href=''>
        <img className="icon" src={linkedin} />
      </a>
      <a href=''>
        <img className="icon" src={breifcase} />
      </a>
    </div>
  );
};

export default socialButtons;

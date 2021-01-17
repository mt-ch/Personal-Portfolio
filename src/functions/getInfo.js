import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

async function GetInfo(setInfo) {
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
    const infos = await fetch("https://strapi-z1gs.onrender.com/info", {
      method: "GET",
      headers: headers,
    })
      .then(checkStatus)
      .then(parseJSON);
    return setInfo(infos);
  } catch (error) {
    return console.error(error);
  }
}

export default GetInfo;

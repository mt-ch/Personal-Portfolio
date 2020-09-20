import React, { PureComponent } from "react";

import SocialButtons from "../components/socialButtons";
import Nav from "../components/nav";
import arrow from "../assets/icons/arrow.png";

export class landing extends PureComponent {
  state = {
    landings: [],
    error: null
  };

  // Fetch portfolio info
  componentDidMount = async () => {
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
      const landings = await fetch("http://localhost:1337/landing", {
        method: "GET",
        headers: headers
      })
        .then(checkStatus)
        .then(parseJSON);
      console.log(landings);
      this.setState({ landings });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { error, landings } = this.state;

    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }

    return (
      <div className="landing">
        <Nav />
        <div className="landing-info">
          <h1>{landings.name}</h1>
          <h1>{landings.header1}</h1>
          <h1>{landings.header2}</h1>
          <h1>{landings.header3}</h1>
          <SocialButtons />
        </div>
        <p>{landings.subText}</p>
        <div className="latest-projects">
          <p>Latest Projects</p>
          <img className="arrow" src={arrow} />
        </div>
      </div>
    );
  }
}

export default landing;

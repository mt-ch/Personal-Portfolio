import React, { PureComponent } from "react";

import SocialButtons from "../components/socialButtons";
import RightArrow from "../assets/icons/right-arrow.svg";

import { StyledLanding } from "./landing.styles";

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
      this.setState({ landings });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { error, landings } = this.state;

    // Print errors if any
    if (error) {
      return (
        <div>
          <p>An error occured: {error.message}</p>
        </div>
      );
    }
    return (
      // <div className="landing">
      //   <div className="landing-info">
      //     {/* <h1>{landings.header1}</h1>
      //     <h1>{landings.header2}</h1> */}
      //   </div>
      //   <div className='sub-text'>
      //   <p>{landings.subText}</p>
      //     <div className="latest-projects">
      //       <p className='latest-projects-text'><strong>PROJECTS</strong></p>
      //       <img className="arrow" src={arrow} />
      //     </div>
      //   </div>
      // </div>
      <StyledLanding>
        <div className="shapes" />
        <div className="sub-text">
          <p>{landings.subText}</p>
          <a className="explore" href="">
            <p>Explore</p>
            <svg width="45" height="45" viewBox="0 0 24 24">
              <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
            </svg>
          </a>
        </div>
      </StyledLanding>
    );
  }
}

export default landing;

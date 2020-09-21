import React, { PureComponent } from "react";

// Icons
import github from '../assets/icons/github.png';
import linkedin from '../assets/icons/linkedin.png';
import breifcase from '../assets/icons/breifcase.png';

export class info extends PureComponent {
  state = {
    infos: [],
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
      const infos = await fetch("http://localhost:1337/infos", {
        method: "GET",
        headers: headers
      })
        .then(checkStatus)
        .then(parseJSON);
      this.setState({ infos });
    } catch (error) {
      this.setState({ error });
    }
  };
  render() {
    const { error, info } = this.state;

    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }

    return (
      <div className="info">
        <h4>Information</h4>
        {this.state.infos.map(info => (
          <ul className="infoList" key={info.id}>
            <li>
              <h1>{info.name}</h1>
            </li>
            <li>
              <h2>{info.jobTitle}</h2>
            </li>
            <li>
              <p>{info.email}</p>
            </li>
            <li>
              <p>{info.phoneNumber}</p>
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

export default info;


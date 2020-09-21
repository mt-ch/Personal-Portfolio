import React, { PureComponent } from "react";
import arrow from "../assets/icons/arrow.png";
import github from "../assets/icons/github.png";
import website from "../assets/icons/website.png";

export class projects extends PureComponent {
  state = {
    projects: [],
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
      const projects = await fetch("http://localhost:1337/projects", {
        method: "GET",
        headers: headers
      })
        .then(checkStatus)
        .then(parseJSON);
      this.setState({ projects });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { error, projects } = this.state;

    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }

    return (
      <div>
        {this.state.projects.map(project => (
          <div className="project" key={project.id}>
            <img
              className="project-cover"
              src="http://localhost:1337/uploads/large_pink_Flower_76cea52f86.jpg"
            />
            <div className="project-info">
              <div className="project-text">
                <div className="project-link">
                  <h4 className="project-info-text">{project.projectName}</h4>
                  <img className="arrow" src={arrow} />
                </div>
                <p className="project-info-text">{project.Roles}</p>
                <p className="project-info-text">{project.Technologies}</p>
              </div>

              <div className="project-view">
                <a href="">
                  <img className="icon" src={github} />
                </a>
                <a href="">
                  <img className="icon" src={website} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default projects;

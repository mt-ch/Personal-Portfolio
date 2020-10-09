import React, { PureComponent } from "react";
import { StyledProject } from "./projects.styled";
import Project from '../../components/project/project';



export class projects extends PureComponent {
  state = {
    projects: [],
    openProject: false,
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

  openProject() {
    return this.setState({ openProject: true })
  }

  render() {
    const { error, projects, openProject } = this.state;

    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }

    return (
      <StyledProject>
        {this.state.projects.map(project => (
          <div className="project" key={project.id}>
            <img src="http://localhost:1337/uploads/large_pink_Flower_76cea52f86.jpg" />
            <div className="project-info">
              <div className="project-text">
                <a onClick={this.openProject(true)}>
                  <p>
                    <strong>{project.projectName}</strong>
                  </p>
                  <svg width="45" height="45" viewBox="0 0 24 24">
                    <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
                  </svg>
                </a>
                <p>{project.Roles}</p>
                <p>{project.Technologies}</p>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
            {/* <Project project={project} openProject={openProject}/> */}
          </div>
        ))}
      </StyledProject>
    );
  }
}

export default projects;


// onClick={() => setProjectOpen(!projectOpen)}
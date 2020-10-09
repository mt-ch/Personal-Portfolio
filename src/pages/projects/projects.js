import React, { PureComponent } from "react";
import { StyledProject } from "./projects.styled";

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
      // <div>
      //   {this.state.projects.map(project => (
      //     <div className="project" key={project.id}>
      //       <img
      //         className="project-cover"
      //         src="http://localhost:1337/uploads/large_pink_Flower_76cea52f86.jpg"
      //       />
      //       <div className="project-info">
      //         <div className="project-text">
      //           <div className="project-link">
      //             <p className="project-info-text"><strong>{project.projectName}</strong></p>
      //             <img className="arrow" src={arrow} />
      //           </div>
      //           <p className="project-info-text">{project.Roles}</p>
      //           <p className="project-info-text">{project.Technologies}</p>
      //           <p className="project-info-text description">{project.description}</p>
      //         </div>

      //         <div className="project-view">
      //           <a href="">
      //             <img className="icon" src={github} />
      //           </a>
      //           <a href="">
      //             <img className="icon" src={website} />
      //           </a>
      //         </div>
      //       </div>
      //     </div>
      //   ))}
      // </div>
      <StyledProject>
        {this.state.projects.map(project => (
          <div className="project" key={project.id}>
            <img src="http://localhost:1337/uploads/large_pink_Flower_76cea52f86.jpg" />
            <div className="project-info">
              <div className="project-text">
                <a href="">
                  <p>
                    <strong>{project.projectName}</strong>
                  </p>
                  <svg width="45" height="45" viewBox="0 0 24 24">
                    <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
                  </svg>
                </a>
                <p>{project.Roles}</p>
                <p>{project.Technologies}</p>
                <p className='project-description'>{project.description}</p>
              </div>
            </div>
            {/* <div className="project-view">
              <a href="">
                <img className="icon" src={github} />
              </a>
              <a href="">
                <img className="icon" src={website} />
              </a>
            </div> */}
          </div>
        ))}
      </StyledProject>
    );
  }
}

export default projects;

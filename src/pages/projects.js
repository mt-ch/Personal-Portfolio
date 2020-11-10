import React, { useEffect, useState } from "react"
import GetProjects from "../functions/getProjects"
import Accordion from "../components/accordion"
import Layout from "../components/layout"
import { StyledProjects } from "../styled/projects.styled"

const Projects = () => {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    GetProjects(setProjects)
  }, [])
  return (
    <Layout isHome={false} color={'white'} text={'black'}>
      <StyledProjects>
        <div className="project-header">
          <h1>Projects</h1>
        </div>
        {projects.map(project => (
          <Accordion
            title={project.name}
            roles={project.roles}
            technologies={project.technologies}
            description={project.description}
            github={project.git}
            website={project.website}
            coverPhoto={project.coverPhoto}
            photoAlbum={project.photos}
            text={'black'}
            link={project.id}
          />
        ))}
      </StyledProjects>
    </Layout>
  )
}

export default Projects

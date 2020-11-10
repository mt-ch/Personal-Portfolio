import React, { useEffect, useState } from "react"
import GetFeatured from "../functions/getFeaturedProjects"
import Accordion from './accordion'

const FeaturedWork = () => {
  const [featured, setFeatured] = useState([])
  useEffect(() => {
    GetFeatured(setFeatured)
  }, [])
  return (
    <div>
      {featured.map(project => (
        <Accordion
          title={project.name}
          roles={project.roles}
          technologies={project.technologies}
          description={project.description}
          github={project.git}
          website={project.website}
          coverPhoto={project.coverPhoto}
          photoAlbum={project.photos}
          text={'white'}
          openText={'black'}
          link={project.id}
        />
      ))}
    </div>
  )
}

export default FeaturedWork

import React from 'react'
import "./Projects.css"
import Works from './Works'

const Projects = () => {
  return (
    <section className="projects section" id='#projects'>
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">The most recent</span>

        <Works />
    </section>
  )
}

export default Projects
import React from 'react'
import "./Skills.css"
import Frontend from './Frontend'
import Backend from './Backend'
import Database from './Db'
import Frameworks from './Frameworks'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">Technical Abilities</span>

        <div className="skills__container container grid">
            <Frontend />
            <Database />
            <Backend />
            <Frameworks />
        </div>
    </section>
  )
}

export default Skills
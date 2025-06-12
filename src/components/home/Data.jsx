import React from 'react'
import DarkMode from "../DarkMode/DarkMode";

const Data = () => {
  return (
    <div className="home__data">
        <h1 className="home__title">Avinash S Naidu</h1>
        <h3 className='home__subtitle'>Full stack Developer</h3>
        <p className="home__description">Hey there! I'm a software developer and technology enthusiast based in Bengaluru, India. </p>

        <DarkMode />
    </div>
  )
}

export default Data
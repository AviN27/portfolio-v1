import React from 'react'
import './Home.css'
import Social from './Social'
import Data from './Data'
import ScrollDown from './ScrollDown'
import Lottie from 'lottie-react'
import homeAnimation from "../../assets/Animation2.json"

const Home = () => {
  return (
    <section className="home section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
                <Social />

                <Lottie animationData={homeAnimation} className='home__animation'/>

                <Data />
            </div>
            <ScrollDown />
        </div>
    </section>
  )
}

export default Home
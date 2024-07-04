import React, { useState } from 'react'
import "./Qualifications.css"

const Qualifications = () => {

    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }

  return (
    <section className="qualification section" id='qualifications'>
        <h2 className="section__title">Qualifications</h2>
        <span className="section__subtitle">The journey so far</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={
                    toggleState === 1 ? "qualification__button qualification__active button--flex" : "hover-underline-animation qualification__button button--flex"
                    } onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i>
                     Education
                </div>

                <div className={
                    toggleState === 2 ? "qualification__button qualification__active button--flex" : "hover-underline-animation qualification__button button--flex"
                    } onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>
                     Experience
                </div> 

            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">CBSE 11th & 12th</h3>
                            <span className="qualification__subtitle">
                                MES Indian School - Qatar
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2016 - 2018
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Bachelors of Infomation Science Engineering</h3>
                            <span className="qualification__subtitle">
                                BMS Institute of Technology - Bengaluru, India
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2018 - 2022
                            </div>
                        </div>
                    </div>
                </div>

{/* ----------------------------- */}

                <div  className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Software Development Intern</h3>
                            <span className="qualification__subtitle">
                                Optimal Strategix Group, Inc. - Bengaluru, India
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> Mar 2022 - Jul 2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Software Development Engineer 1</h3>
                            <span className="qualification__subtitle">
                                Optimal Strategix Group, Inc. - Bengaluru, India
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> Aug 2022 - Aug 2023
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Software Developer</h3>
                            <span className="qualification__subtitle">
                                Freelance - Bengaluru, India
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> Oct 2023 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                </div>

            </div>



        </div>
    </section>
  )
}

export default Qualifications
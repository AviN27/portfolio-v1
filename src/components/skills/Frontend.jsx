import React from 'react'

const Frontend = () => {

    // let skillList = ["React.js", "JavaScript"]

  return (
    <div className="skills__content">
        <h3 className="skills__title">Frontend</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                <i class='bx bxs-chevron-right-circle'></i>
                <div>
                    <h3 className="skills__name">HTML</h3>
                    
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bxs-chevron-right-circle'></i>
                <div>
                    <h3 className="skills__name">CSS, SCSS</h3>
                    
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bxs-chevron-right-circle'></i>
                <div>
                    <h3 className="skills__name">TailwindCSS</h3>
                    
                </div>
                </div>

                

            </div>

            <div className="skills__group">
                
                <div className="skills__data">
                <i class='bx bxs-chevron-right-circle'></i>
                <div>
                    <h3 className="skills__name">JavaScript</h3>
                    
                </div>
                </div>
                

                <div className="skills__data">
                <i class='bx bxs-chevron-right-circle'></i>
                <div>
                    <h3 className="skills__name">Bootstrap</h3>
                    
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bxs-chevron-right-circle'></i>
                <div>
                    <h3 className="skills__name">Git</h3>
                    
                </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Frontend
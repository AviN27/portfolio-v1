import React from 'react'

const Database = () => {

    // let skillList = ["React.js", "JavaScript"]

  return (
    <div className="skills__content">
        <h3 className="skills__title">Database</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                <i class='bx bxs-chevron-right-circle'></i>
                <div>
                    <h3 className="skills__name">PostgreSQL</h3>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bxs-chevron-right-circle'></i>
                <div>
                    <h3 className="skills__name">MongoDB</h3>
                    
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bxs-chevron-right-circle'></i>
                <div>
                    <h3 className="skills__name">MySQL</h3>
                    
                </div>
                </div>

                

            </div>

            <div className="skills__group">
                <div className="skills__data">
                <i class='bx bxs-chevron-right-circle'></i>
                <div>
                    <h3 className="skills__name">ElasticSearch</h3>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bxs-chevron-right-circle'></i>
                <div>
                    <h3 className="skills__name">Redis</h3>
                    
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bxs-chevron-right-circle'></i>
                <div>
                    <h3 className="skills__name">SQLite</h3>
                    
                </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Database
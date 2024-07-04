import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">{"<Avi_N />"}</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#projects" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#contact" className="footer__link">Contact</a>
                </li>
            </ul>
            <div className="footer__social">
                <a href="https://www.linkedin.com/in/avinash-s-naidu-0950351bb/" className="footer__social-link" target='_blank' rel="noopener noreferrer">
                    <i className="uil uil-linkedin"></i>
                </a>

                <a href="https://github.com/AviN27" className="footer__social-link" target='_blank' rel="noopener noreferrer">
                    <i className="uil uil-github"></i>
                </a>

                <a href="https://open.spotify.com/playlist/3TcOF4ryHQIFUycqycngGq?si=b410656214554bd6" className="footer__social-link" target='_blank' rel="noopener noreferrer">
                    <i class='bx bxl-spotify'></i>
                </a>                
            </div>

            <span className="footer__copy">2023 Avinash N + Youtube tutorials</span>
        </div>
    </footer>
  )
}

export default Footer
import React from 'react'
import "../footer/footer.css"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <div className='footer' id='footer'>
        <a href='#' className='footer-logo'>Retag Saad</a>
        <ul className="footer-links">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#service">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="social">
          <a href="#" target='_blank'><FaLinkedin/></a>
          <a href="#" target='_blank'><FaGithub/></a>
        </div>
    </div>
  )
}

export default Footer
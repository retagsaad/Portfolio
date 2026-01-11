import React from 'react'
import "../footer/footer.css"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <div className='footer'>
      <div className='container footer-container'>
        <a className='footer-logo'>Retag Saad</a>
        <ul className="links">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#porjects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="contact">
          <a href="#" target='_blank'><FaLinkedin/></a>
          <a href="#" target='_blank'><FaGithub/></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
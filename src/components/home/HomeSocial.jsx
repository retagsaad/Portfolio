import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function HomeSocial() {
  return (
    <div className='home_social'>
        <a href="https://www.linkedin.com/in/retag-saad77/" target="_blank"><FaLinkedin/></a>
        <a href="https://github.com/retagsaad" target="_blank"><FaGithub/></a>

    </div>
  )
}

export default HomeSocial
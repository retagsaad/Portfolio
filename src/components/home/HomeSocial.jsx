import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function HomeSocial() {
  return (
    <div className='home_socials'>
        <a href="#" target="_blank"><FaLinkedin/></a>
        <a href="#" target="_blank"><FaGithub /></a>

    </div>
  )
}

export default HomeSocial
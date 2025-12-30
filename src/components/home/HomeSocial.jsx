import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function HomeSocial() {
  return (
    <div className='home_socials'>
        <a href="#" target='_blanck'><FaLinkedin/></a>
        <a href="#" target='_blanck'><FaGithub /></a>

    </div>
  )
}

export default HomeSocial
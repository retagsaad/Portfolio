import React from 'react'
import '../projects/project.css'
import codeflow from "../../assets/codeflow.png"
import dashboard from "../../assets/dashboard.png"
import movieapp from "../../assets/movieapp.png"
import IMG5 from "../../assets/portfolio5.PNG"
import IMG6 from "../../assets/portfolio6.jpg"
import agencyai from '../../assets/agencyai.png'

function Project() {
  const projectsData =[
    {
      id:1,
      image:agencyai,
      title:"Agency AI",
      github:'https://github.com/retagsaad/agency.ai',
      demo:'https://agency-ai-rtg.netlify.app/',
    },
      {
      id:2,
      image:codeflow,
      title:"Code Flow",
      github:'https://github.com/retagsaad/code-flow',
      demo:'https://codeflowbyrtg.netlify.app/',
    },
      {
      id:3,
      image:dashboard,
      title:"Admin Dashboard",
      github:'https://github.com/retagsaad/Admin-Dashboard',
      demo:'https://admin-dashboard-rtg.netlify.app/',
    },
      {
      id:4,
      image:movieapp,
      title:"Movie App",
      github:'https://github.com',
      demo:'https://movieappbyrtg.netlify.app/',
    },
     
  ]
  return (
    <div className='projects' id='projects'>
      <div className='header'>
        <h5>My Recent Work</h5>
        <h3>Projects</h3>
      </div>
      <div className="container projects-container"> 
       {projectsData.map(({id,image,title,github,demo})=>(
        <div key={id} className='item'>
          <div className="item-img">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="item-btns">
          <a href={github} target='_blank' className="btn">GitHub</a>
          <a href={demo} target='_blank' className="btn-primary btn">Live Demo</a>
          </div>
        </div>
       ))}
        
      </div>
    </div>
  )
}

export default Project
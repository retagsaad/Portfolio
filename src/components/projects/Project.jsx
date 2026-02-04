import React from 'react'
import '../projects/project.css'
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.PNG"
import IMG6 from "../../assets/portfolio6.jpg"
import logo from '../../assets/logo.svg'

function Project() {
  const projectsData =[
    {
      id:1,
      image:logo,
      title:"Agency AI",
      github:'https://github.com/retagsaad/agency.ai',
      demo:'https://agency-ai-rtg.netlify.app/',
    },
      {
      id:2,
      image:IMG2,
      title:"ITEM 2",
      github:'https://github.com',
      demo:'https://demo.com',
    },
      {
      id:3,
      image:IMG3,
      title:"ITEM 3",
      github:'https://github.com',
      demo:'https://demo.com',
    },
      {
      id:4,
      image:IMG4,
      title:"ITEM 4",
      github:'https://github.com',
      demo:'https://demo.com',
    },
      {
      id:5,
      image:IMG5,
      title:"ITEM 5",
      github:'https://github.com',
      demo:'https://demo.com',
    },
      {
      id:6,
      image:IMG6,
      title:"ITEM 6",
      github:'https://github.com',
      demo:'https://demo.com',
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
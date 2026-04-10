import React from 'react'
import '../service/service.css'
import { LiaPencilRulerSolid } from "react-icons/lia";
import { FaCode } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";

const servicesData =[
  {
    id:1,
    icon:<LiaPencilRulerSolid />,
    title:'Web Design',
    text: 'modern, responsive, and user-friendly website designs that provide a smooth and engaging user experience.',
  },
  {
    id:2,
    icon:<IoIosRocket />,
    title:'Fast Performance',
    text: 'websites optimized for speed and performance to ensure fast loading times and better user satisfaction.',
  },
  {
    id:3,
    icon:<FaCode />,
    title:'Clean Code',
    text: 'clean, maintainable, and well-structured code following best practices for scalability and readability.',
  }
]
function Service() {
  return (
    <div id='service' className='service'>
      <div className='header'>
    <h5>What I Offer</h5>
    <h3>Services</h3>
      </div>
      <div className="container container-service">
        {servicesData.map(({id,icon,title,text})=>(
          <div key={id} className="card">
        <div className='icon'>{icon}</div>
        <h3>{title}</h3>
        <p className='text-light'>{text}</p>
      </div>
        ))}
      
      </div>
    </div>
  )
}

export default Service
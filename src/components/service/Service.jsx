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
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A maiores reprehenderit laudantium ab cumque illo!',
  },
  {
    id:2,
    icon:<IoIosRocket />,
    title:'Fast Performance',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A maiores reprehenderit laudantium ab cumque illo!',
  },
  {
    id:3,
    icon:<FaCode />,
    title:'Clean Code',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A maiores reprehenderit laudantium ab cumque illo!',
  }
]
function Service() {
  return (
    <div id='service' className='service'>
      <div className='header'>
    <h4>What I Offer</h4>
    <h2>Services</h2>
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
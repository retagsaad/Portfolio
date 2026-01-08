import React from 'react'
import "./contact.css"
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const contactData=[
  {
    id:1,
    icon:<MdOutlineEmail />,
    title:"Email",
    info:"retagsaad77@gmail.com",
    link:"mailto:retagsaad77@gmail.com",
  },
   {
    id:2,
    icon:<FaLinkedin/>,
    title:"Linkedin",
    info:"retag-saad77",
    link:"https://www.linkedin.com/in/retag-saad77/",
  },
   {
    id:3,
    icon:<FaGithub/>,
    title:"Github",
    info:"retagsaad",
    link:"https://github.com/retagsaad",
  },
]
function Contact() {
  return (
    <div className='contact'>
      <div className='header'>
        <h4>Get In Touch</h4>
        <h2>Contact Me</h2>
      </div>
      <div className='container contact-container'>
      <div className='contact-options'>
    {contactData.map(({id,icon,title,info,link})=>(
      <div key={id} className='contact-option'>
        {icon}
        <h4>{title}</h4>
        <h5>{info}</h5>
        <a href={link} target='_blank'>Send Message</a>
      </div>
    ))}
    

      </div>
      <div className="form">
        <input type="text" placeholder='Your Full Name' name='name'/>
        <input type="text" placeholder='Your Email' name='email'/>
        <textarea rows={10} type="text" placeholder='Your Message'/>
      </div>
      <a href="" className="btn-primary btn">Send Message</a>
    </div>
    </div>
  )
}

export default Contact
import "./contact.css"
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
    .sendForm('service_50orjwf', 'template_jbs5x77', form.current, '34F__WzeVlEpmB7qk',
    )
    e.target.reset();
  };

  return (
    <div className='contact' id="contact">
      <div className='header'>
        <h5>Get In Touch</h5>
        <h3>Contact Me</h3>
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
      <form className="form" onSubmit={sendEmail} ref={form}>
        <input type="text" placeholder='Your Full Name' name='name'/>
        <input type="text" placeholder='Your Email' name='email'/>
        <textarea name='message' rows={10} type="text" placeholder='Your Message'/>
      <button  className="btn btn-primary">Send Message</button>
      </form>
    </div>
    </div>
  )
}

export default Contact
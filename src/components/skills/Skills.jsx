import "../skills/skills.css";
import CSS from "../../assets/css3.svg"
import Javascript from "../../assets/javascript.svg"
import Bootstrap from "../../assets/Bootstrap.png"
import React from "../../assets/React.svg"
import Git from "../../assets/Git.png"
import GitHub from "../../assets/Github.png"

const SkillsData =[
  {id:1,
    image:CSS,
    title:'Css',
    disc: "User interface",
  },
  {id:2,
    image:Bootstrap,
    title:'Bootstrap',
    disc: "Framework",
  },
  {id:3,
    image:Javascript,
    title:'Javascript',
    disc: "Interaction",
  },
    {id:4,
    image:React,
    title:'React',
    disc: "Framework",
  },
    {id:5,
    image:Git,
    title:'Git',
    disc: "Version Control System",
  },
    {id:6,
    image:GitHub,
    title:'GitHub',
    disc: "Online Code Repository",
  },
]

function Skills() {
  return (
    <div className="skiils"id="skills">
      <div className="header">
        <h4>What Skills I Have</h4>
        <h2>My Experience</h2>
        <div className="skills-container container">
          {SkillsData.map(({id , image , title , disc}) =>(
            <div key={id}className="card-skill">
            <div className="logo">
              <img src={image} alt={title} />
            </div>
            <div className="content">
            <h4>{title}</h4>
            <p className="text-light">{disc}</p>
            </div>
          </div> 
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;

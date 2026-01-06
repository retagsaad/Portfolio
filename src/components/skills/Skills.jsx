import "../skills/skills.css";
import CSS from "../../assets/css3.svg"
import Javascript from "../../assets/javascript.svg"
import Bootstrap from "../../assets/Bootstrap.png"
import React from "../../assets/React.svg"
import Git from "../../assets/Git.png"
import GitHub from "../../assets/Github.png"



function Skills() {
  return (
    <div className="skiils">
      <div className="header">
        <h4>What Skills I Have</h4>
        <h2>My Experience</h2>
        <div className="skills-container container">
          <div className="card-skill">
            <div className="logo">
              <img src={CSS} alt="CSS" />
            </div>
            <h3>Css</h3>
            <p className="text-light">User interface</p>
            <div className="logo">
              <img src={Bootstrap} alt="CSS" />
            </div>
            <h3>Bootstrab</h3>
            <p className="text-light">Framework</p>
          </div>
          <div className="card">
            <div className="logo">
              <img src={Javascript} alt="javascript" /> 
            </div>
            <h3>JavaScript</h3>
            <p className="text-light">Interaction</p>
            <div className="logo">
              <img src={React} alt="" />
            </div>
            <h3>React</h3>
            <p className="text-light">Framework</p>
          </div>
          <div className="logo">
            <img src={Git} alt="" />
          </div>
          <h3>Git</h3>
          <p className="text-light">Version Control System</p>
          <div className="logo">
            <img src={GitHub} alt="" />
          </div>
          <h3>GitHub</h3>
          <p className="text-light">Online Code Repository</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;

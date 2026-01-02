import React from "react";
import "../skills/skills.css";
import CSS from "../../assets/css3.svg"
function Skills() {
  return (
    <div className="skiils">
      <div className="header">
        <h4>What Skills I Have</h4>
        <h2>My Experience</h2>
        <div className="skills-container container">
          <div className="card-skill">
            <div className="logo">
              <img src={CSS} alt="" />
            </div>
            <h3>Css</h3>
            <p>User interface</p>
            <div className="logo"></div>
            <h3>Bootstrab</h3>
            <p>Framework</p>
          </div>
          <div className="card">
            <div className="logo"></div>
            <h3>JavaScript</h3>
            <p>Interaction</p>
            <div className="logo"></div>
            <h3>React</h3>
            <p>Framework</p>
          </div>
          <div className="logo"></div>
          <h3>Git</h3>
          <p>Version Control System</p>
          <div className="logo"></div>
          <h3>GitHub</h3>
          <p>Online Code Repository</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;

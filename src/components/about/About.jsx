import React from "react";
import "./about.css";
import Me from "../../assets/me.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <div className="about" id="about">
      <div className="header">
        <h4>Get To Know</h4>
        <h2>About Me</h2>
      </div>
      <div className="about-container container">
        <div className="about-me">
          <div className="about-me-img">
          <img src={Me} alt="Retag Saad" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <div className="about-card">
              <FaAward className="about-icon" />
              <h4>Experience</h4>
              <h6>++years</h6>
            </div>
            <div className="about-card">
              <FiUsers className="about-icon" />
              <h4>Clients</h4>
              <h6>+++</h6>
            </div>
            <div className="about-card">
              <VscFolderLibrary className="about-icon" />
              <h4>Projects</h4>
              <h6>+++</h6>
            </div>
          </div>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nihil nesciunt minus laborum. Eum vero nisi voluptatum eos, error ullam repellendus laboriosam, doloribus tempora unde corrupti deserunt distinctio, qui facere?</p>
      <a href="#contact"className="btn btn-primary">Let's Talk</a>
      </div>
      </div>
    </div>
  );
}

export default About;

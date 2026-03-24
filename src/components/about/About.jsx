import React from "react";
import "./about.css";
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
        {/* <div className="about-me">
          <div className="about-me-img">
          <img src={Me} alt="Retag Saad" />
          </div>
        </div> */}
        <div className="about-content">
          <div className="about-cards">
            <div className="about-card">
              <FaAward className="about-icon" />
              <h4>Experience</h4>
              <h6>+++years</h6>
            </div>
            <div className="about-card">
              <FiUsers className="about-icon" />
              <h4>Clients</h4>
              <h6>+++Clients</h6>
            </div>
            <div className="about-card">
              <VscFolderLibrary className="about-icon" />
              <h4>Projects</h4>
              <h6>+++Projects</h6>
            </div>
          </div>

          <p>
            Passionate Front-End Developer specializing in building modern,
            responsive, and user-friendly web applications using React. I am
            currently a Software Industry and Multimedia student at the Faculty
            of Science, Alexandria University, with a strong foundation in
            front-end technologies including HTML, CSS, JavaScript, React, and
            Tailwind CSS. I am deeply passionate about the tech field and always
            eager to learn new tools and technologies. I enjoy turning ideas
            into real, interactive experiences and continuously strive to
            improve my skills.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;

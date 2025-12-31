import React from "react";
import "../home/home.css";
import Me from '../../assets/me.png';
import CV from '../../assets/cv.pdf';
import HomeSocial from "../home/HomeSocial";

function Home() {
  return (
    <div className="home">
      <div className="container home_container">
        
        <h4>Hello I'm</h4>
        <h1>Retag Saad</h1>
        <h4 className="text-light">Frontend Developer</h4>
        <div className="btns">
          <a href={CV} className="btn" download>
            Download Cv
          </a>
          <a href="#" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
        <div className="me">
        <img src={Me} alt="Retag Saad" />
        </div>
        <a href="#about" className="scroll_down">Scroll Down</a>
        <HomeSocial/>
      </div>
    </div>
  );
}

export default Home;

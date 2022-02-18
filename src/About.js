import React from "react";
import "./About.css";
import aboutImg from "./img/satish.jpeg";
const About = () => {
  return (
    <div className="about component__space">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img pointer" />
          </div>
          <div className="mask__effect"></div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                this is a sample for about me this is a sample for about me this is a sample for
                about me this is a sample for about me this is a sample for about me this is a is a
                sample for about me this is a sample for about me this is a sample for about me this
                is a sample for about me
              </p>
              <p className="about__text p__color">
                this is a sample for about me this is a sample for about me this is a sample for
                about me this is a sample for about me this is a sample for about me this is a is a
                sample for about me this is a sample for about me this is a sample for about me this
                is a sample for about me
              </p>
              <p className="about__text p__color">
                this is a sample for about me this is a sample for about me this is a sample for is
                a sample for about me
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="s">
                  <button className="about btn pointer">Download Cv</button>
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

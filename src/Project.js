import React from "react";
import "./Project.css";
import project1 from "./img/portfolio-1.jpg";
import project2 from "./img/portfolio-2.jpg";
import project3 from "./img/portfolio-3.jpg";
import project4 from "./img/portfolio-4.jpg";

const Project = () => {
  return (
    <div className="project component__space">
      <div className="heading">
        <h1 className="heading">My Latest Projects</h1>
        <p className="heading p__color"> THis is the section about my services</p>
        <p className="heading p__color"> and this also are my services</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={project1} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
                <div className="project__meta absolute">
                  <h5 className="project__text">Development</h5>
                  <h4 className="project__text">Getting tickets to the big show</h4>
                  <a href="#" className="project__btn">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={project2} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
                <div className="project__meta absolute">
                  <h5 className="project__text">Development</h5>
                  <h4 className="project__text">Getting tickets to the big show</h4>
                  <a href="#" className="project__btn">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={project3} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
                <div className="project__meta absolute">
                  <h5 className="project__text">Development</h5>
                  <h4 className="project__text">Getting tickets to the big show</h4>
                  <a href="#" className="project__btn">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={project4} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
                <div className="project__meta absolute">
                  <h5 className="project__text">Development</h5>
                  <h4 className="project__text">Getting tickets to the big show</h4>
                  <a href="#" className="project__btn">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={project3} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
                <div className="project__meta absolute">
                  <h5 className="project__text">Development</h5>
                  <h4 className="project__text">Getting tickets to the big show</h4>
                  <a href="#" className="project__btn">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={project4} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
                <div className="project__meta absolute">
                  <h5 className="project__text">Development</h5>
                  <h4 className="project__text">Getting tickets to the big show</h4>
                  <a href="#" className="project__btn">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
            <button className="view__more pointer btn">View More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

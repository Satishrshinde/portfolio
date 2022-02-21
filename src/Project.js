import React from "react";
import "./Project.css";
import project1 from "./img/todoApp.png";
import project2 from "./img/clothingApp2.png";
import project3 from "./img/groceryApp2.png";
import project4 from "./img/portfolio-4.jpg";

const Project = () => {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Projects</h1>
        <p className="heading p__color"> THis is the section about my services</p>
        <p className="heading p__color"> and this also are my services</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box">
              <div className="project__box__img">
                <div className="project__img__box">
                  <img src={project1} alt="" className="project__img" />
                </div>
              </div>
            </div>
            <div className="infoText">
              <h3>Project Details</h3>
              <h3 className="project__text">Name : TODO Application</h3>
              <div className="d__flex align__items__center">
                <h3>Live Link : </h3>
                <a href="https://react-app-basic-32.herokuapp.com/todoapp" className="linkText">
                  Click here
                </a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={project3} alt="" className="project__img" />
                </div>
              </div>
            </div>
            <div className="infoText">
              <h3>Project Details</h3>
              <h3 className="project__text">Name : Grocery Application</h3>
              <div className="d__flex align__items__center">
                <h3>Live Link :</h3>
                <a href="https://react-app-basic-32.herokuapp.com/grocery" className="linkText">
                  Click here
                </a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={project2} alt="" className="project__img" />
                </div>
              </div>
            </div>
            <div className="infoText">
              <h3>Project Details</h3>
              <h3 className="project__text">Name : Clothing Application</h3>
              <div className="d__flex align__items__center">
                <h3>Live Link :</h3>
                <a href="https://react-app-basic-32.herokuapp.com/" className="linkText">
                  Click here
                </a>
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

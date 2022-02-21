import React, { useState } from "react";
import "./Home.css";
import logo from "./img/logo.png";
const Home = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  const [show, setShow] = useState(true);
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
            <a href="#">
              <h1>Satish Shinde</h1>
            </a>
          </div>
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items mx__15">Home</li>
              </a>
              <a href="#About">
                <li className="nav__items mx__15">About</li>
              </a>
              <a href="#Service">
                <li className="nav__items mx__15">Service</li>
              </a>
              <a href="#Portfolio ">
                <li className="nav__items mx__15">Portfolio</li>
              </a>
              <a href="#Contact">
                <li className="nav__items mx__15">Contact</li>
              </a>
            </ul>
          </div>
          <div className="toggle__menu">
            <svg
              onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-justify white pointer"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          {show ? (
            <div className="sideNavbar">
              <ul className="sidebar d__flex">
                <li className="sideNavbar">
                  <a href="Home">Home</a>
                </li>
                <li className="sideNavbar">
                  <a href="About">About</a>
                </li>
                <li className="sideNavbar">
                  <a href="Service">Service</a>
                </li>
                <li className="sideNavbar">
                  <a href="Portfolio">Portfolio</a>
                </li>
                <li className="sideNavbar">
                  <a href="Contact">Contact</a>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz__10">WELCOME TO MY WORLD</h1>
              <h2 className="home__text pz__10">Hi,i'm Satish Shinde</h2>
              <h3 className="home__text sweet pz__10">Front End Web Developer.</h3>
              <h4 className="home__text pz__10">Based in India.</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

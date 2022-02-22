import React from "react";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";
// raise latest pr to deploy code
// smooth scroll for move to top

// add this in about section

// As a freelance web developer I have collaborated with several
// developers in US and poland.
//  I am always available to discuss your project over the phone or via Skype.

// add this for contact me
// I’m interested in freelance opportunities – especially ambitious or large projects. However,
// if you have other request or question, don’t hesitate to use the form.

// add this inside footer
// Copyright © 2022 Satish Shinde. India based Freelance Web Developer

const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Service />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};
export default App;

import React from "react";
import "./Contact.css";
import contactImg from "./img/satish.jpeg";

function Contact() {
  return (
    <div className="contact component__space" id="Contact">
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">Hire Me</h1>
              <p className="hire__text white">
                I am available for freelance work.Connenct with me via phone:
              </p>
              <p className="hire__text white">
                <strong>7507695758</strong> or email <strong>satishrshinde2014@gmail.com</strong>
              </p>
            </div>
            <div className="input__box">
              <input type="text" className="contact name" placeholder="Your Name" />
              <input type="text" className="contact email" placeholder="Your email" />
              <input type="text" className="contact subject" placeholder="Your subject" />
              <textarea name="message" id="message" placeholder="Write Your Message"></textarea>
              <button className="btn contact pointer" type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="col__2">
          <img src={contactImg} alt="" className="contact__img" />
        </div>
      </div>
    </div>
  );
}

export default Contact;

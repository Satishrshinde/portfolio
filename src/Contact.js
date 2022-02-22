import React from "react";
import { useState } from "react";
import "./Contact.css";
import contactImg from "./img/satish.jpeg";

// TODO  ==> Add real email submit functionality and API call
// reference => https://mailtrap.io/blog/react-contact-form/#Using-Expressjs-Nodemailer

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [messageErr, setMessageErr] = useState(false);

  function handleSubmit() {
    if (name === "") {
      setNameErr(true);
    } else {
      setNameErr(false);
    }
    if (email === "") {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
    if (message === "") {
      setMessageErr(true);
    } else {
      setMessageErr(false);
    }
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
    if (name !== "" && email !== "" && email === isValidEmail && message !== "") {
      //api
    }
  }
  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  //
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
              <input
                type="text"
                className={`contact name ${nameErr ? "errorMessage" : ""}`}
                placeholder="Your Name"
                value={name}
                onChange={event => setName(event.target.value)}
              />
              {nameErr && <span className="sweet">Name should not be empty</span>}
              <input
                type="text"
                className={`contact email ${emailErr ? "errorMessage" : ""}`}
                placeholder="Your email"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
              {emailErr && <span className="sweet">email should be valid</span>}
              <textarea
                name="message"
                className={`contact message ${messageErr ? "errorMessage" : ""}`}
                id="message"
                placeholder="Write Your Message"
                value={message}
                onChange={event => setMessage(event.target.value)}
              />
              {messageErr && <span className="sweet">message should not be empty</span>}
              <button className="btn contact pointer" type="submit" onClick={handleSubmit}>
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

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import contactImg from "./img/satish.jpeg";

// add loader after submit action
// or add processing state for button
// add recaptcha to contact form => https://www.emailjs.com/docs/user-guide/adding-captcha-verification/
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [messageErr, setMessageErr] = useState(false);
  const form = useRef();
  const [result, showResult] = useState(false);
  const Result = () => {
    return (
      <p className="white">Your message has been successfully sent.I will contact you soon.</p>
    );
  };
  const sendEmail = () => {
    emailjs
      .sendForm("service_hkrb72q", "template_j2qaxzc", form.current, "user_4pX7VP9aElVXjSM3cfOKf")
      .then(
        result => {
          showResult(true);
          setTimeout(function () {
            showResult(false);
            setName("");
            setEmail("");
            setMessage("");
          }, 3000);
        },
        error => {
          console.log(error.text);
        }
      );
  };
  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function handleSubmit(e) {
    e.preventDefault();
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
    if (name !== "" && isValidEmail && message !== "") {
      sendEmail();
    }
  }

  return (
    <div className="contact component__space" id="Contact">
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h1 className="hire__text">Hire Me</h1>
              <p className="hire__text white">
                I’m interested in freelance opportunities especially ambitious or large projects.
                However, if you have other request or question, don’t hesitate to use the form
              </p>
              <p className="hire__text white">
                or Connect with me via phone: <strong>7507695758</strong>
              </p>
              <p className="hire__text white">
                or email <strong>satishrshinde2014@gmail.com</strong>
              </p>
            </div>

            <form ref={form} className="input__box">
              <input
                type="text"
                className={`contact name ${nameErr ? "errorMessage" : ""}`}
                placeholder="Your Name"
                name="user_name"
                value={name}
                onChange={event => setName(event.target.value)}
              />
              {nameErr && <span className="sweet">Name should not be empty</span>}
              <input
                type="text"
                name="user_email"
                className={`contact email ${emailErr ? "errorMessage" : ""}`}
                placeholder="Your email"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
              {emailErr && <span className="sweet">email should be valid</span>}
              <textarea
                name="message"
                className={`message ${messageErr ? "errorMessage" : ""}`}
                placeholder="Write Your Message"
                value={message}
                onChange={event => setMessage(event.target.value)}
              />
              {messageErr && <span className="sweet">message should not be empty</span>}
              <button className="btn contact pointer" onClick={handleSubmit}>
                Submit
              </button>
              <div className="row">{result ? <Result /> : null}</div>
            </form>
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

import React, { useState } from 'react';
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";

const Contact = () => {
  const [result, setResult] = useState(""); // ✅ you forgot to define this

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "604c187e-7705-4224-8f5f-c05accef2583"); // ✅ Replace with actual key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully ✅");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message || "Something went wrong");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently looking for a summer internship, so feel free to contact me anytime.</p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Mail Icon" />
              <p>chandranshubhardwaj68@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Call Icon" />
              <p>9877003764</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location Icon" />
              <p>Patiala, Punjab</p>
            </div>
            <div className="contact-detail">
              <FaLinkedin size={24} color="#0A66C2" />
              <a href="https://www.linkedin.com/in/chandranshubhardwaj0907/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
            <div className="contact-detail">
              <FaGithub size={24} color="#ffffff" />
              <a href="https://github.com/chandranshubhardwaj0907" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
            <div className="contact-detail">
              <FaCode size={24} color="#FFA116" />
              <a href="https://leetcode.com/Chandranshu0907/" target="_blank" rel="noopener noreferrer">
                LeetCode
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder="Your Name" name="name" id="name" required />

          <label htmlFor="email">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" id="email" required />

          <label htmlFor="message">Write your message</label>
          <textarea name="message" rows="8" placeholder="Enter your Message" id="message" required></textarea>

          <button type="submit" className="contact-submit">Submit now</button>

          <span className="form-result">{result}</span> {/* Optional success message */}
        </form>
      </div>
    </div>
  );
};

export default Contact;

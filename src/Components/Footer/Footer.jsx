import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Chandranshu. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/chandranshubhardwaj0907/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/chandranshubhardwaj0907" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://leetcode.com/Chandranshu0907/" target="_blank" rel="noopener noreferrer">LeetCode</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

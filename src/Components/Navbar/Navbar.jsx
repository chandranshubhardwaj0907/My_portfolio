import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css';
import nav_underline from "../../assets/nav_underline.svg";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("Home");

  return (
    <div className='navbar'>
      <ul className="nav-menu">
        <li>
          <AnchorLink className='anchor-link' offset={50} href="#home" onClick={() => setActiveMenu("Home")}>
            Home
            {activeMenu === "Home" && <img src={nav_underline} alt="underline" className="underline-icon" />}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href="#about" onClick={() => setActiveMenu("About")}>
            About
            {activeMenu === "About" && <img src={nav_underline} alt="underline" className="underline-icon" />}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href="#education" onClick={() => setActiveMenu("Education")}>
            Education
            {activeMenu === "Education" && <img src={nav_underline} alt="underline" className="underline-icon" />}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href="#projects" onClick={() => setActiveMenu("Projects")}>
            Projects
            {activeMenu === "Projects" && <img src={nav_underline} alt="underline" className="underline-icon" />}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href="#contact" onClick={() => setActiveMenu("Contact")}>
            Contact
            {activeMenu === "Contact" && <img src={nav_underline} alt="underline" className="underline-icon" />}
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href="#contact">
          Connect with me
        </AnchorLink>
      </div>

    </div>
  );
};

export default Navbar;

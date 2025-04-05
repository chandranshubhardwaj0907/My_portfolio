import React from 'react'
import './Hero.css'
import about_profile from '../../assets/about_profile.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
    return (
        <div>
            <div id='home' className="hero">
                <img src={about_profile} alt="" />
                <h1>I'm <span>Chandranshu Bhardwaj</span>, frontend developer based in India</h1>
                <p>I am a frontend developer from India , currently pursuing undergraduation at TIET,Patiala</p>
                <div className="hero-action">
                    <AnchorLink className='anchor-link' offset={50} href="#contact">
                        <div className="hero-connect">Connect with me</div>
                    </AnchorLink>

                    <a href="/Chandranshu_Resume.pdf" download target="_blank" rel="noopener noreferrer">
                        <div className="hero-resume">My Resume</div>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default Hero
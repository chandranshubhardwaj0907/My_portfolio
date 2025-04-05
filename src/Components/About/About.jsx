import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import about_profile from "../../assets/about_profile.jpg";

const About = () => {
    return (
        <div id="about" className="about">
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="Theme Pattern" />
            </div>

            <div className="about-section">
                <div className="about-left">
                    <img src={about_profile} alt="Profile" style={{width: "370px"}}/>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>
                            As a dedicated web developer currently pursuing a B.Tech in Computer Engineering at Thapar University, my passion for marketing has added a valuable dimension to my skill set. The fusion of technical expertise and marketing acumen has allowed me to create web solutions that not only function flawlessly but also resonate with the target audience.
                        </p>
                        <p>
                            My journey at Thapar University has been instrumental in honing my abilities and equipping me to excel in both the technical and marketing domains, making me a versatile and effective contributor in the ever-evolving digital landscape.
                        </p>
                    </div>

                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p>
                            <hr style={{ width: "80%" }} />
                        </div>
                        <div className="about-skill">
                            <p>React JS</p>
                            <hr style={{ width: "60%" }} />
                        </div>
                        <div className="about-skill">
                            <p>JavaScript</p>
                            <hr style={{ width: "65%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Node JS</p>
                            <hr style={{ width: "45%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Marketing</p>
                            <hr style={{ width: "85%" }} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>2+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                {/* <hr /> */}
                {/* <div className="about-achievement">
                    <h1>2+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div> */}
            </div>
        </div>
    );
};

export default About;

import React from "react";
import "./Projects.css";

const projects = [
  {
    name: "Netflix-GPT",
    description: "A Netflix-like app with GPT-powered recommendations.",
    link: "https://netflix-gpt-chandranshu.vercel.app/",
    
  },
  {
    name: "Eatzilla",
    description: "A food delivery app with real-time restaurant data.",
    link: "https://github.com/chandranshubhardwaj0907/eatzilla",
  },
  {
    name: "FitHub",
    description: "A responsive fitness platform for workouts and nutrition.",
    link: "https://chandranshubhardwaj0907.github.io/chandranshu-fitness/",
  },
  {
    name: "TinderDog",
    description: "A platform for dogs to connect and collaborate. Made just for fun.",
    link: "https://chandranshubhardwaj0907.github.io/Tinder_Dog/",
  },
  {
    name: "Tribute Page",
    description: "A simple tribute page showcasing a famous personality.",
    link: "https://chandranshubhardwaj0907.github.io/Tribute_page/",
  },
  {
    name: "Core Page ",
    description: "Build core page of Virsa Society",
    link: "https://ssavirsa.in/core.html",
  },
];

const ProjectShowcase = () => {
  return (
    <div id="projects" className="project-section">
      <h2 className="section-title">My Projects</h2>
      <div className="project-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-info">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;

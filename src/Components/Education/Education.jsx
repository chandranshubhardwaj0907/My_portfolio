import React from "react";
import "./Education.css"; 

const Education = () => {
  const educationData = [
    {
      year: "2020",
      title: "Class 10",
      school: "DAV Public School, Amritsar",
      percentage: "92.4%",
    },
    {
      year: "2022",
      title: "Class 12",
      school: "DAV Public School, Amritsar",
      percentage: "94%",
    },
    {
      year: "2026(Expected)",
      title: "College",
      school: "Thapar University, Patiala",
      cgpa: "8.03/10",
    },
  ];

  return (
    <div id="education" className="education">
      <h2 className="education-title">Education</h2>
      <div className="education-timeline">
        {educationData.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-dot"></div>
            <div className="education-content">
              <p className="education-year">{edu.year}</p>
              <h3 className="education-heading">{edu.title}</h3>
              <p className="education-school">{edu.school}</p>
              <p className="education-percentage">{edu.percentage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;

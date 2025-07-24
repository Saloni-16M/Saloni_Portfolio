import React from 'react';
import './Section.css';
import { FaLaptopCode, FaBuilding, FaReact, FaNodeJs, FaDatabase, FaJs, FaHtml5, FaCss3Alt, FaMobile } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';

function Experience() {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "College Project",
      period: "2024 - Present",
      description: "Currently working on an Inventory Management System for the college",
      details: [
        "Developing a comprehensive inventory management solution",
        "Implementing full-stack features with modern technologies",
        "Managing database design and system architecture",
        "Collaborating with college administration for requirements"
      ],
      technologies: [
        { name: "React", icon: FaReact },
        { name: "JavaScript", icon: FaJs },
      ],
      icon: FaLaptopCode
    },
    {
      title: "Frontend Developer",
      company: "College TNP Website",
      period: "2024",
      description: "Contributed to the Training and Placement (TNP) website frontend development",
      details: [
        "Developed responsive user interfaces for the TNP portal",
        "Implemented modern UI/UX design principles",
        "Enhanced user experience for students and recruiters",
        "Collaborated with the development team for seamless integration"
      ],
      technologies: [
        { name: "React", icon: FaReact },
        { name: "JavaScript", icon: FaJs },
        { name: "CSS3", icon: FaCss3Alt },
        { name: "HTML5", icon: FaHtml5 },
        { name: "Responsive Design", icon: FaMobile }
      ],
      icon: FaBuilding
    }
  ];

  return (
    <section className="section experience-section">
      <h1>Work Experience</h1>
      
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-icon">
              <exp.icon className="icon" />
            </div>
            
            <div className="experience-content">
              <div className="experience-header">
                <h3 className="job-title">{exp.title}</h3>
                <div className="company-info">
                  <span className="company-name">{exp.company}</span>
                  <span className="period">{exp.period}</span>
                </div>
              </div>
              
              <p className="experience-description">{exp.description}</p>
              
              <div className="experience-details">
                <h4>Key Responsibilities:</h4>
                <ul>
                  {exp.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
              
              <div className="technologies-used">
                <h4>Technologies Used:</h4>
                <div className="tech-tags">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      <tech.icon className="tech-icon" />
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience; 
import React from 'react';
import './Section.css';
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaDatabase, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiBootstrap, SiVite } from 'react-icons/si';
import nodejsLogo from '../assets/nodejs.png';
import phpLogo from '../assets/php.png';
import mysqlLogo from '../assets/mysql.png';
import arduinoLogo from '../assets/arduino.png';
import visualStudioLogo from '../assets/visualstudiocode.svg';

function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", icon: FaReact, level: 90 },
        { name: "HTML5", icon: FaHtml5, level: 95 },
        { name: "CSS3", icon: FaCss3Alt, level: 90 },
        { name: "JavaScript", icon: FaJs, level: 85 },
        { name: "TailwindCSS", icon: SiTailwindcss, level: 80 }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: FaNodeJs, level: 85 },
        { name: "Express", icon: SiExpress, level: 80 },
        { name: "PHP", logo: phpLogo, level: 75 }
      ]
    },
    {
      category: "Database",
      skills: [
        { name: "MongoDB", icon: SiMongodb, level: 80 },
        { name: "MySQL", logo: mysqlLogo, level: 75 },
        
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", icon: FaGitAlt, level: 85 },
        { name: "GitHub", icon: FaGithub, level: 85 },
        { name: "VS Code", logo: visualStudioLogo, level: 80 },
        { name: "Arduino", logo: arduinoLogo, level: 75 },
        { name: "IoT", icon: "🌐", level: 70 },
        { name: "API Integration", icon: "🔗", level: 85 }
      ]
    }
  ];

  return (
    <section className="section skills-section">
      <h1>Tech Stack & Skills</h1>
      
      <div className="orbiting-skills">
        <div className="center-icon">💻</div>
        {skillCategories.flatMap(cat => cat.skills).slice(0, 8).map((skill, index) => (
          <div 
            key={skill.name}
            className="orbiting-skill"
            style={{
              '--angle': `${(index * 45)}deg`,
              '--delay': `${index * 0.2}s`
            }}
          >
            <div className="skill-icon">
              {skill.logo ? (
                <img src={skill.logo} alt={skill.name} className="tech-logo" />
              ) : skill.icon && typeof skill.icon === 'string' ? (
                <span className="skill-emoji">{skill.icon}</span>
              ) : (
                <skill.icon className="tech-icon" />
              )}
            </div>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>

      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div key={category.category} className="skill-category">
            <h3 className="category-title">{category.category}</h3>
            <div className="skills-list">
              {category.skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-info">
                    {skill.logo ? (
                      <img src={skill.logo} alt={skill.name} className="tech-logo" />
                    ) : skill.icon && typeof skill.icon === 'string' ? (
                      <span className="skill-emoji">{skill.icon}</span>
                    ) : (
                      <skill.icon className="tech-icon" />
                    )}
                    <span className="skill-name-small">{skill.name}</span>
                  </div>
                  {/* Removed progress bar and percentage */}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills; 
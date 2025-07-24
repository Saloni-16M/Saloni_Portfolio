import React from 'react';
import './Section.css';
import saloniPic from '../assets/saloni_pic.jpg';

function About() {
  return (
    <section className="section about-section">
      <h1>About Me</h1>
      <div className="about-content">
        <div className="about-photo-section">
          <div className="photo-container">
            <div className="photo-placeholder">
              <img src={saloniPic} alt="Saloni" className="profile-image" />
            </div>
            <div className="photo-glow"></div>
          </div>
          <div className="photo-info">
            <h3>Saloni</h3>
            <p className="photo-subtitle">Information Technology Student</p>
            <div className="photo-details">
              <span>🎓 Graduation 2026</span>
              <span>📍 India</span>
            </div>
          </div>
        </div>
        
        <div className="about-text-section">
          <div className="about-text">
            <p>
              I'm a passionate developer experienced in building responsive web applications, 
              interactive user interfaces, and hardware-based smart systems. With a strong 
              foundation in the MERN stack, PHP, and IoT, I enjoy solving real-world problems 
              through technology.
            </p>
            <p>
              Currently pursuing Information Technology at university, I'm set to graduate in 2025. 
              My journey in tech has led me to explore both software and hardware solutions, 
              from full-stack web applications to Arduino-based IoT projects.
            </p>
          </div>
          
          <div className="tech-highlights">
            <div className="highlight-item">
              <span className="highlight-icon">🌐</span>
              <span>Full-Stack Development</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">🔌</span>
              <span>IoT & Hardware</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">🎯</span>
              <span>Problem Solving</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">🚀</span>
              <span>Innovation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 
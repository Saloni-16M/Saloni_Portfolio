import React, { useState, useEffect } from 'react';
import './Section.css';

/**
 * Home component - Hero section of the portfolio
 * Features animated typing effect, floating elements, and call-to-action buttons
 */
function Home() {
  // State for the typing animation effect
  const [text, setText] = useState('');
  const fullText = "I'm a passionate developer experienced in building responsive web applications, interactive user interfaces, and hardware-based smart systems.";
  
  // Effect to create the typing animation
  useEffect(() => {
    let index = 0;
    // Set up interval to add one character every 50ms for typing effect
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        // Stop the animation when complete
        clearInterval(timer);
      }
    }, 50);
    
    // Cleanup: clear interval when component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section home-section">
      {/* Main hero content container */}
      <div className="home-content">
        {/* Greeting text */}
        <div className="greeting">
          <span className="greeting-text">Hello, I'm</span>
        </div>
        
        {/* Main name with gradient text effect */}
        <h1 className="hero-name">Saloni</h1>
        
        {/* Professional title */}
        <div className="title-container">
          <span className="title">Full Stack Developer</span>
        </div>
        
        {/* Animated typing text with blinking cursor */}
        <p className="typing-text">
          {text}
          <span className="cursor">|</span>
        </p>
        
        {/* Basic information tags */}
        <div className="basic-info">
          <span className="info-tag">Information Technology (IT)</span>
          <span className="info-tag">Graduation 2026</span>
          <span className="info-tag">India</span>
        </div>
        
        {/* Call-to-action buttons */}
        <div className="cta-buttons">
          {/* Primary CTA - View Projects */}
          <button 
            className="cta-btn primary"
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </button>
          
          {/* Secondary CTA - Contact */}
          <button 
            className="cta-btn secondary"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </button>
        </div>
      </div>
      
      {/* Decorative background elements for visual appeal */}
      <div className="home-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      {/* Animated space-themed elements */}
      <div className="astronaut-container">
        <div className="astronaut">🚀</div>
        {/* Orbiting satellites with different emojis */}
        <div className="orbit orbit-1">
          <div className="satellite">💻</div>
        </div>
        <div className="orbit orbit-2">
          <div className="satellite">⚡</div>
        </div>
        <div className="orbit orbit-3">
          <div className="satellite">🔧</div>
        </div>
      </div>
      
      {/* Profile picture placeholder */}
      <div className="profile-pic-placeholder">
        👩‍💻
      </div>
      
      {/* Scroll indicator to encourage users to scroll down */}
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
}

export default Home; 
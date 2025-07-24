import React, { useState, useEffect } from 'react';
import './Navigation.css';
import saloniPic from '../assets/saloni_pic.jpg';

/**
 * Navigation component that provides site-wide navigation
 * Features a logo with profile picture and section navigation menu
 * Includes mobile hamburger menu for small screens
 * 
 * @param {Array} sections - Array of section objects with id and label
 * @param {string} activeSection - Currently active section ID
 * @param {Function} onSectionChange - Callback function when section is clicked
 */
function Navigation({ sections, activeSection, onSectionChange }) {
  // State to control mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State to track screen size
  const [isMobile, setIsMobile] = useState(false);

  // Effect to handle window resize and determine if mobile
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      console.log('Screen width:', window.innerWidth, 'Is mobile:', mobile);
      // Close mobile menu when screen becomes larger
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    // Check initial screen size
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup event listener
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Function to handle section navigation
  const handleSectionClick = (sectionId) => {
    onSectionChange(sectionId);
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    console.log('Mobile menu toggled:', newState);
  };

  return (
    <nav className="portfolio-nav">
      <div className="nav-container">
        {/* Logo section with profile picture and name */}
        {/* Clicking the logo scrolls to the home section */}
        <div className="nav-logo" onClick={() => handleSectionClick('home')}>
          <img src={saloniPic} alt="Saloni" className="logo-image" />
          <span className="logo-text">Saloni</span>
        </div>
        
        {/* Hamburger menu button for mobile */}
        {isMobile && (
          <button 
            className={`hamburger-menu ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        )}
        
        {/* Navigation menu with all portfolio sections */}
        <ul className={`nav-menu ${isMobile ? 'mobile-menu' : ''} ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          {sections.map((section) => (
            <li
              key={section.id}
              // Apply 'active' class to highlight current section
              className={activeSection === section.id ? 'active' : ''}
              // Handle click to scroll to section
              onClick={() => handleSectionClick(section.id)}
            >
              {section.label}
            </li>
          ))}
        </ul>
      </div>
      
      {/* Mobile menu overlay */}
      {isMobile && isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}
    </nav>
  );
}

export default Navigation; 
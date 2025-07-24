import React, { useState, useEffect, useRef } from 'react';
import './Section.css';
import ProjectModal from './ProjectModal';
import { FaExternalLinkAlt, FaGithub, FaCode, FaMobile, FaGlobe, FaDatabase, FaRocket } from 'react-icons/fa';

const Projects = () => {
  // State for managing the project modal (detailed view)
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // State for carousel functionality
  const [currentSlide, setCurrentSlide] = useState(0); // Current slide index (0-4)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true); // Auto-play toggle
  
  // Ref to store the auto-play interval for cleanup
  const autoPlayRef = useRef(null);

  // Project data array - each project contains all necessary information
  // This could be moved to a separate data file for better organization
  const projects = [
    {
      id: 1,
      title: "Real-Time News & Notes Platform",
      description: "Developed a full-stack platform to display real-time news from external APIs. Integrated JWT-based authentication to secure user sessions. Enabled authenticated users to create, update, and persistently store personal notes.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&h=300&fit=crop", // Placeholder image
      category: "Full Stack",
      icon: <FaGlobe />,
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT Authentication"],
      github: "https://github.com/yourusername/news-notes-platform", // Placeholder link
      live: "https://news-notes-platform.vercel.app" // Placeholder link
    },
    {
      id: 2,
      title: "Surplus Smile",
      description: "Developed a donation platform to connect resorts with NGOs for surplus food distribution. Built user-friendly dashboards for food listing, tracking, and claiming. Integrated NodeMailer to automatically alert NGOs when new donations become available.",
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=500&h=300&fit=crop", // Placeholder image
      category: "Full Stack",
      icon: <FaGlobe />,
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "NodeMailer"],
      github: "https://github.com/yourusername/surplus-smile", // Placeholder link
      live: "https://surplus-smile.vercel.app" // Placeholder link
    }
  ];

  /**
   * Opens the project modal with detailed information
   * @param {Object} project - The project object to display
   */
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  /**
   * Closes the project modal and resets state
   */
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  /**
   * Moves to the next slide in the carousel
   * Uses modulo operator to loop back to first slide
   */
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  /**
   * Moves to the previous slide in the carousel
   * Uses modulo operator to loop to last slide when going backwards
   */
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  /**
   * Jumps directly to a specific slide
   * @param {number} index - The slide index to jump to
   */
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  /**
   * Handles button clicks (GitHub/Live Demo) and prevents modal opening
   * @param {Event} e - The click event
   * @param {string} url - The URL to open
   */
  const handleButtonClick = (e, url) => {
    e.stopPropagation(); // Prevent the card click event from firing
    window.open(url, '_blank', 'noopener,noreferrer'); // Open in new tab safely
  };

  // Auto-play functionality with pause on hover
  useEffect(() => {
    if (isAutoPlaying) {
      // Set up interval to automatically advance slides every 5 seconds
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    // Cleanup function to clear interval when component unmounts or dependencies change
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, currentSlide]); // Re-run effect when auto-play state or current slide changes

  /**
   * Pauses auto-play when user hovers over the carousel
   */
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  /**
   * Resumes auto-play when user stops hovering over the carousel
   */
  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <section id="projects" className="projects-section">
      {/* Section title with gradient text effect */}
      <h1>Projects</h1>
      
      {/* Main carousel container */}
      <div className="projects-carousel-container">
        {/* Carousel wrapper with hover event handlers for auto-play control */}
        <div 
          className="projects-carousel-wrapper"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Previous slide button */}
          <button className="carousel-nav-btn prev" onClick={prevSlide}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>
          
          {/* Carousel track container */}
          <div className="projects-carousel">
            {/* Carousel track with smooth sliding animation */}
            <div 
              className="projects-carousel-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {/* Map through projects to create individual cards */}
              {projects.map((project) => (
                <div key={project.id} className="project-card" onClick={() => handleProjectClick(project)}>
                  {/* Project image with hover effects */}
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  
                  {/* Project header with icon and category */}
                  <div className="project-header">
                    <div className="project-icon">{project.icon}</div>
                    <div className="project-category">{project.category}</div>
                  </div>
                  
                  {/* Project title and description */}
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  {/* Technology badges */}
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                  
                  {/* Action buttons for GitHub and Live Demo */}
                  <div className="project-actions">
                    <button 
                      className="project-btn"
                      onClick={(e) => handleButtonClick(e, project.github)}
                    >
                      <FaGithub />
                      Code
                    </button>
                    <button 
                      className="project-btn primary"
                      onClick={(e) => handleButtonClick(e, project.live)}
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Next slide button */}
          <button className="carousel-nav-btn next" onClick={nextSlide}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
            </svg>
          </button>
        </div>
        
        {/* Carousel navigation dots */}
        <div className="carousel-dots">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Project modal for detailed view */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Projects; 
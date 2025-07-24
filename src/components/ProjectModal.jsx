import React from 'react';
import './ProjectModal.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

/**
 * Modal component for displaying detailed project information
 * Appears when a project card is clicked in the Projects carousel
 * 
 * @param {Object} project - Project object containing all project details
 * @param {boolean} isOpen - Whether the modal should be displayed
 * @param {Function} onClose - Function to call when modal should close
 */
function ProjectModal({ project, isOpen, onClose }) {
  // Don't render anything if modal is closed or no project is selected
  if (!isOpen || !project) return null;

  return (
    // Modal overlay - clicking outside the modal content closes it
    <div className="modal-overlay" onClick={onClose}>
      {/* Modal content container - clicking inside prevents closing */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close button in top-right corner */}
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        
        {/* Modal header with project icon and basic info */}
        <div className="modal-header">
          <div className="project-modal-icon">{project.icon}</div>
          <div className="project-modal-info">
            <h2>{project.title}</h2>
            <span className="project-modal-category">{project.category}</span>
          </div>
        </div>
        
        {/* Modal body with detailed project information */}
        <div className="modal-body">
          {/* Large project image */}
          <div className="project-modal-image">
            <img src={project.image} alt={project.title} />
          </div>
          
          {/* Project details section */}
          <div className="project-modal-details">
            {/* Project description */}
            <h3>Description</h3>
            <p>{project.description}</p>
            
            {/* Technologies used section */}
            <h3>Technologies Used</h3>
            <div className="project-modal-tech">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>
            
            {/* External links to live demo and GitHub */}
            <div className="project-links">
              <a 
                href={project.live} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link live-link"
              >
                <FaExternalLinkAlt className="link-icon" />
                Live Demo
              </a>
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link github-link"
              >
                <FaGithub className="link-icon" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal; 
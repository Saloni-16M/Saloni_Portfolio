import React, { useState } from 'react';
import './Section.css';
import ProjectModal from './ProjectModal';
import { FaExternalLinkAlt, FaGithub, FaGlobe } from 'react-icons/fa';
import expenseTrackerImg from '../assets/expense_tracker.png';
import todoImg from '../assets/todo.png';
import dailysyncImg from '../assets/dailysync.png';
import stonePaperScissorImg from '../assets/stonepaperscissor.png';
import surplusSmileImg from '../assets/surplusSmile.png';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "DailySync",
      description: "Developed a full-stack platform to display real-time news from external APIs. Integrated JWT-based authentication to secure user sessions. Enabled authenticated users to create, update, and persistently store personal notes.",
      image: dailysyncImg,
      category: "Full Stack",
      icon: <FaGlobe />,
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT Authentication"],
      github: "https://github.com/Saloni-16M/dailysync_project/tree/main",
      live: "https://dailysync-project-edje.vercel.app/"
    },
    {
      id: 2,
      title: "Surplus Smile",
      description: "Developed a donation platform to connect resorts with NGOs for surplus food distribution. Built user-friendly dashboards for food listing, tracking, and claiming. Integrated NodeMailer to automatically alert NGOs when new donations become available.",
      image: surplusSmileImg,
      category: "Full Stack",
      icon: <FaGlobe />,
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "NodeMailer"],
      github: "https://github.com/Saloni-16M/MinorProject",
      live: "https://surplus-smile-ypbg.vercel.app/"
    },
    {
      id: 3,
      title: "Expense Tracker",
      description: "A web-based expense tracker that allows users to manage and categorize their expenses. Built using PHP and MySQL for persistent data storage.",
      image: expenseTrackerImg,
      category: "Web App",
      icon: <FaGlobe />,
      technologies: ["PHP", "MySQL"],
      github: "https://github.com/Saloni-16M/Expense-Tracker",
      live: "https://expense-tracker-demo.vercel.app"
    },
    {
      id: 4,
      title: "ToDo App",
      description: "A simple Todo application that displays current weather information using HTML, CSS, and JavaScript. Fetches data from a public weather API.",
      image: todoImg,
      category: "Web App",
      icon: <FaGlobe />,
      technologies: ["HTML", "CSS", "JavaScript","React"],
      github: "https://github.com/Saloni-16M/todo",
      live: "https://todo-three-gamma-24.vercel.app/"
    },
    {
      id: 5,
      title: "Stone Paper Scissor",
      description: "A classic Stone Paper Scissor game built using HTML, CSS, and JavaScript. Play against the computer with a simple and interactive UI.",
      image: stonePaperScissorImg, // Local image
      category: "Web Game",
      icon: <FaGlobe />,
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Saloni-16M/stone_paper", // Placeholder link
      live: "https://stone-paper-scissor-sepia.vercel.app/" // Placeholder link
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects-section">
      <h1>Projects</h1>
      <p className="projects-intro">A selection of my favorite and most recent work.</p>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card simple" onClick={() => handleProjectClick(project)}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-header">
              <div className="project-icon">{project.icon}</div>
              <div className="project-category">{project.category}</div>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>
            <div className="project-actions">
              <button
                className="project-btn"
                onClick={e => { e.stopPropagation(); window.open(project.github, '_blank', 'noopener,noreferrer'); }}
              >
                <FaGithub /> Code
              </button>
              <button
                className="project-btn primary"
                onClick={e => { e.stopPropagation(); window.open(project.live, '_blank', 'noopener,noreferrer'); }}
              >
                <FaExternalLinkAlt /> Live Demo
              </button>
            </div>
          </div>
        ))}
      </div>
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Projects; 
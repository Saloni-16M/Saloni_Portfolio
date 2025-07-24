import { useState, useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Define all sections of the portfolio with their IDs and display labels
// This array is used for navigation and scroll detection
const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'resume', label: 'Resume' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

function App() {
  // State to track which section is currently active/visible
  // This is used to highlight the correct navigation item
  const [activeSection, setActiveSection] = useState('home');

  /**
   * Smooth scroll to a specific section when navigation item is clicked
   * @param {string} sectionId - The ID of the section to scroll to
   */
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Use smooth scrolling for better user experience
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
  };

  // Effect to automatically update active section based on scroll position
  // This creates a dynamic navigation that highlights the current section
  useEffect(() => {
    const handleScroll = () => {
      // Add 100px offset to trigger section change slightly before reaching the top
      const scrollPosition = window.scrollY + 100;
      
      // Check each section to see which one is currently in view
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          // If scroll position is within this section's boundaries, mark it as active
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup: remove event listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio-container">
      {/* Navigation component with section data and active state */}
      <Navigation
        sections={sections}
        activeSection={activeSection}
        onSectionChange={scrollToSection}
      />
      
      {/* Main content area containing all portfolio sections */}
      <main className="portfolio-main">
        {/* Home Section - Hero/Introduction */}
        <section id="home" className="section-container">
          <Home />
        </section>
        
        {/* About Section - Personal information and background */}
        <section id="about" className="section-container">
          <About />
        </section>

        {/* Resume Section - Downloadable PDF resume */}
        <section id="resume" className="section-container">
          <div className="section resume-section">
            <h1>My Resume</h1>
            <p>You can view or download my resume below:</p>
            {/* Direct link to PDF resume in assets folder */}
            <a
              href="/src/assets/saloni_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
            >
              View Resume (PDF)
            </a>
          </div>
        </section>
        
        {/* Projects Section - Portfolio showcase with carousel */}
        <section id="projects" className="section-container">
          <Projects />
        </section>
        
        {/* Skills Section - Technical skills and technologies */}
        <section id="skills" className="section-container">
          <Skills />
        </section>
        
        {/* Experience Section - Work history and timeline */}
        <section id="experience" className="section-container">
          <Experience />
        </section>
        
        {/* Contact Section - Contact information and social links */}
        <section id="contact" className="section-container">
          <Contact />
        </section>
      </main>

      {/* Footer with additional links and copyright */}
      <Footer />
    </div>
  );
}

export default App;

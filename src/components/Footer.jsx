import React from 'react';
import './Footer.css';
import { FaInstagram, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/_saloni._31/",
      color: "linear-gradient(90deg, #E4405F, #C13584)"
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/saloni-832765266/",
      color: "linear-gradient(45deg, #0077B5, #00A0DC)"
    },
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/Saloni-16M",
      color: "linear-gradient(45deg, #333, #666)"
    },
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      url: "#",
      color: "linear-gradient(45deg, #25D366, #128C7E)"
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Saloni</h3>
          <p>Passionate developer creating innovative solutions</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Connect</h4>
          <div className="social-links">
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.url}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
              >
                <div className="social-icon" style={{ background: social.color }}>
                  <social.icon size={32} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-line"></div>
        <p>&copy; {currentYear} Saloni. All rights reserved.</p>
        {/* <p>Made with ❤️ using React</p> */}
      </div>
    </footer>
  );
}

export default Footer; 
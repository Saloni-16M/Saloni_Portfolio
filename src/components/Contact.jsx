import React from 'react';
import './Section.css';
import { FaMapMarkerAlt, FaGraduationCap, FaLaptopCode, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

function Contact() {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://www.instagram.com/_saloni._31/',
      color: 'linear-gradient(45deg, #E4405F, #C13584)'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/saloni-832765266/',
      color: 'linear-gradient(45deg, #0077B5, #00A0DC)'
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      url: '#',
      color: 'linear-gradient(45deg, #25D366, #128C7E)'
    }
  ];

  return (
    <section className="section contact-section" id="contact">
      <h1 className="contact-title">Get in Touch</h1>
      <h2 className="contact-subtitle">Let's Connect!</h2>
      <p className="contact-intro">
        I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation!
      </p>
      <div className="contact-glass-container">
        <div className="contact-info-block">
          <div className="contact-info-item">
            <span className="contact-icon-glass"><FaMapMarkerAlt size={22} /></span>
            <div>
              <h3>Location</h3>
              <p>India</p>
            </div>
          </div>
          <div className="contact-info-item">
            <span className="contact-icon-glass"><FaGraduationCap size={22} /></span>
            <div>
              <h3>Education</h3>
              <p>Information Technology (IT)</p>
              <p>Graduation: 2026</p>
            </div>
          </div>
          <div className="contact-info-item">
            <span className="contact-icon-glass"><FaLaptopCode size={22} /></span>
            <div>
              <h3>Focus Areas</h3>
              <p>Full-Stack Development • IoT • Problem Solving</p>
            </div>
          </div>
        </div>
        <div className="contact-social-block">
          <div className="contact-social-title">Social Links</div>
          <div className="contact-social-icons">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="contact-social-link"
                style={{ background: social.color }}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                aria-label={social.name}
              >
                <social.icon size={38} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

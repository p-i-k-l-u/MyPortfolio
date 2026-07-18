import React from 'react';
import { CONFIG } from '../config';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="social-links">
            <a 
              href={CONFIG.socials.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="social-link" 
              title="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a 
              href={CONFIG.socials.github} 
              target="_blank" 
              rel="noreferrer" 
              className="social-link" 
              title="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href={CONFIG.socials.email} 
              className="social-link" 
              title="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a 
              href={CONFIG.socials.instagram} 
              target="_blank" 
              rel="noreferrer" 
              className="social-link" 
              title="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <p>© {currentYear} {CONFIG.fullName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

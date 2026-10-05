import React, { useState, useEffect } from 'react';
import { CONFIG } from '../config';

const Header = ({ activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 75;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <a href="#" className="logo" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
            <svg width="34" height="34" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-svg">
              <path d="M50 5L90 28V72L50 95L10 72V28L50 5Z" fill="url(#logo-grad)" opacity="0.1" />
              <path d="M50 5L90 28V72L50 95L10 72V28L50 5Z" stroke="url(#logo-grad)" strokeWidth="6" strokeLinejoin="round" />
              <path d="M38 30H58C67 30 72 35 72 42C72 49 67 54 58 54H48V70H38V30ZM48 46H58C62 46 64 44 64 42C64 40 62 38 58 38H48V46Z" fill="#ffffff" />
              <circle cx="75" cy="75" r="12" fill="#10b981" />
              <path d="M70 75L73 78L80 71" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <defs>
                <linearGradient id="logo-grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#60a5fa" />
                  <stop offset="1" stopColor="#2563eb" />
                </linearGradient>
              </defs>
            </svg>
            <span className="logo-text">{CONFIG.name}</span>
          </a>

          {/* Desktop Menu */}
          <ul className="nav-menu">
            <li>
              <a
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={() => scrollToSection('home')}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={() => scrollToSection('about')}
              >
                About
              </a>
            </li>
            <li>
              <a
                className={`nav-link ${activeSection === 'certifications' ? 'active' : ''}`}
                onClick={() => scrollToSection('certifications')}
              >
                Certifications
              </a>
            </li>
            <li>
              <a
                className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
                onClick={() => scrollToSection('services')}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href={CONFIG.socials.github}
                target="_blank"
                rel="noreferrer"
                className="nav-link"
              >
                Github
              </a>
            </li>
            <li>
              <a
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button className="menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>

          {/* Mobile Menu Drawer */}
          <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
            <a
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => scrollToSection('home')}
            >
              Home
            </a>
            <a
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => scrollToSection('about')}
            >
              About
            </a>
            <a
              className={`nav-link ${activeSection === 'certifications' ? 'active' : ''}`}
              onClick={() => scrollToSection('certifications')}
            >
              Certifications
            </a>
            <a
              className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
              onClick={() => scrollToSection('services')}
            >
              Services
            </a>
            <a
              href={CONFIG.socials.github}
              target="_blank"
              rel="noreferrer"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Github
            </a>
            <a
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

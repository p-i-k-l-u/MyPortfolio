import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ParticlesBg from './components/ParticlesBg';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  // Initialize AOS (Animate on Scroll)
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
  }, []);

  // Update active navigation item on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Toggle Scroll to Top button visibility
      if (window.scrollY > 400) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }

      const sections = ['home', 'about', 'services', 'contact'];
      const scrollPosition = window.scrollY + 200; // offset for triggers

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setActiveSection('home');
  };

  return (
    <>
      {/* Background Interactive Particles */}
      <ParticlesBg />

      {/* Floating Header Navbar */}
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Pages */}
      <main>
        <Home />
        <About />
        <Services />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top button */}
      <button 
        className={`scroll-btn ${showScrollBtn ? 'visible' : ''}`} 
        onClick={scrollToTop}
        title="Scroll to Top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  );
}

export default App;

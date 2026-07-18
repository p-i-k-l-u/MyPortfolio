import React, { useEffect } from 'react';
import { CONFIG } from '../config';

const Contact = () => {
  useEffect(() => {
    // Dynamic loading of Calendly widget assets
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Check if Calendly and target URL are available
      if (window.Calendly && CONFIG.calendlyUrl && CONFIG.calendlyUrl !== "https://calendly.com/") {
        window.Calendly.initBadgeWidget({
          url: CONFIG.calendlyUrl,
          text: 'Schedule time with me',
          color: '#3b82f6',
          textColor: '#ffffff'
        });
      }
    };

    return () => {
      // Remove badge widget on unmount
      const badge = document.querySelector('.calendly-badge');
      if (badge) {
        badge.parentNode.removeChild(badge);
      }
      if (document.head.contains(link)) document.head.removeChild(link);
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" style={{ backgroundColor: 'var(--bg-secondary)', padding: '6rem 0' }}>
      <div className="container">
        <h2 className="section-title text-center" style={{ textAlign: 'center', marginBottom: '1rem' }} data-aos="fade-up">
          Contact <span className="accent-text">Me</span>
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 4rem' }} data-aos="fade-up">
          Let's connect! Have a project in mind, want to talk about QA automation, DevOps pipelines, or just say hello? Reach out anytime!
        </p>

        <div className="contact-grid">
          {/* Card 1: Location */}
          <div className="contact-card" data-aos="fade-up" data-aos-delay="100">
            <div className="contact-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3>Location</h3>
            <p>{CONFIG.location}</p>
          </div>

          {/* Card 2: Phone */}
          <div className="contact-card" data-aos="fade-up" data-aos-delay="300">
            <div className="contact-icon">
              <i className="fas fa-phone"></i>
            </div>
            <h3>Phone</h3>
            <p>{CONFIG.phone}</p>
            <p className="subtext">Mon to Fri 9am to 6pm</p>
          </div>

          {/* Card 3: Email */}
          <div className="contact-card" data-aos="fade-up" data-aos-delay="500">
            <div className="contact-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <h3>Email</h3>
            <p>{CONFIG.email}</p>
            <p className="subtext">Send me your query anytime!</p>
          </div>
        </div>

        {/* WhatsApp Chat Button */}
        <div className="whatsapp-container" data-aos="zoom-in" data-aos-delay="700">
          <a 
            href={`https://wa.me/${CONFIG.whatsappNumber}?text=Hello%20${CONFIG.fullName},%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect!`} 
            target="_blank" 
            rel="noreferrer" 
            className="btn btn-whatsapp"
          >
            <i className="fab fa-whatsapp" style={{ fontSize: '1.3rem' }}></i> Send WhatsApp Message
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

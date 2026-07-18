import React from 'react';
import { CONFIG } from '../config';

const About = () => {
  return (
    <section id="about-details" style={{ backgroundColor: 'var(--bg-secondary)', padding: '5rem 0' }}>
      <div className="container">
        <h2 className="section-title text-center" style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
          About <span className="accent-text">Me</span>
        </h2>
        
        {/* Highlight Expertise Cards */}
        <div className="services-grid" style={{ marginBottom: '5rem' }}>
          <div className="service-card" data-aos="fade-up" data-aos-delay="100">
            <div className="service-card-icon">
              <i className="fas fa-code"></i>
            </div>
            <h3>Software Test Engineer</h3>
            <p>
              Specialized in automation tools like Selenium and pytest for comprehensive testing. Expert in designing and implementing automated test suites using Python to enhance software quality and reliability.
            </p>
          </div>

          <div className="service-card" data-aos="fade-up" data-aos-delay="300">
            <div className="service-card-icon">
              <i className="fas fa-server"></i>
            </div>
            <h3>DevOps Expertise</h3>
            <p>
              Proficient in Linux, Docker, Kubernetes, and Ansible. Focus on automating deployment processes and implementing infrastructure as code for enhanced system reliability.
            </p>
          </div>

          <div className="service-card" data-aos="fade-up" data-aos-delay="500">
            <div className="service-card-icon">
              <i className="fas fa-cloud"></i>
            </div>
            <h3>Cloud Practitioner</h3>
            <p>
              Expert in AWS, GCP, and Azure cloud platforms. Specialized in cloud infrastructure optimization and automated deployment using Terraform and Kubernetes.
            </p>
          </div>
        </div>

        {/* Education & Experience Timelines */}
        <div className="timeline-section-grid">
          {/* Education Timeline */}
          <div data-aos="fade-right" data-aos-duration="1000">
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <i className="fas fa-graduation-cap" style={{ color: 'var(--accent-color)' }}></i> Education
            </h2>
            <div className="timeline-container" style={{ marginTop: '2rem' }}>
              {CONFIG.education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-card-content">
                    <h3>{edu.degree}</h3>
                    <p>{edu.institution} ({edu.years})</p>
                    <span className="timeline-grade">{edu.grade}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div data-aos="fade-left" data-aos-duration="1000">
            <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <i className="fas fa-briefcase" style={{ color: 'var(--accent-color)' }}></i> Experience
            </h2>
            <div className="timeline-container" style={{ marginTop: '2rem' }}>
              {CONFIG.experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-card-content">
                    <h3>{exp.role}</h3>
                    <p>{exp.company} | {exp.period}</p>
                    <p style={{ marginTop: '0.8rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

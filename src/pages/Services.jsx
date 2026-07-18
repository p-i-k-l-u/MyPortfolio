import React, { useState, useEffect, useRef } from 'react';

const Services = () => {
  // Stats counter animation logic
  const [stats, setStats] = useState({ projects: 0, clients: 0, experience: 0 });
  const statsRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        const duration = 2000; // ms
        const steps = 50;
        const interval = duration / steps;

        const targetProjects = 5;
        const targetClients = 3;
        const targetExperience = 1.5; // general round figure

        let step = 0;
        const timer = setInterval(() => {
          step++;
          setStats({
            projects: Math.min(Math.ceil((targetProjects / steps) * step), targetProjects),
            clients: Math.min(Math.ceil((targetClients / steps) * step), targetClients),
            experience: Math.min(Math.ceil((targetExperience / steps) * step), targetExperience)
          });

          if (step >= steps) {
            clearInterval(timer);
          }
        }, interval);
      }
    }, { threshold: 0.2 });

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const servicesList = [
    {
      title: "Automation Testing",
      icon: "fa-robot",
      desc: "Comprehensive automation testing solutions using cutting-edge tools and frameworks.",
      bullets: ["Selenium WebDriver", "pytest Framework", "API Testing", "CI/CD Integration"]
    },
    {
      title: "DevOps",
      icon: "fa-code-branch",
      desc: "Streamlined DevOps solutions for continuous integration and deployment.",
      bullets: ["Docker Containerization", "Kubernetes Orchestration", "Jenkins Pipelines", "Infrastructure as Code"]
    },
    {
      title: "Security & Performance",
      icon: "fa-shield-alt",
      desc: "Comprehensive security testing and performance optimization services.",
      bullets: ["Penetration Testing", "Load Testing", "Security Audits", "Performance Optimization"]
    },
    {
      title: "Networking",
      icon: "fa-network-wired",
      desc: "Advanced networking solutions for modern infrastructure needs.",
      bullets: ["Network Design", "Cloud Infrastructure", "Security Implementation", "Performance Monitoring"]
    }
  ];

  const stepsList = [
    { num: "1", title: "Consultation", desc: "Understanding your needs and project requirements", icon: "fa-comments" },
    { num: "2", title: "Planning", desc: "Developing comprehensive strategy and roadmap", icon: "fa-sitemap" },
    { num: "3", title: "Implementation", desc: "Executing solutions with precision and expertise", icon: "fa-cogs" },
    { num: "4", title: "Optimization", desc: "Continuous monitoring and improvement", icon: "fa-chart-line" }
  ];

  const testimonials = [
    {
      name: "Elite Martin",
      role: "Project Manager",
      text: "Outstanding service and exceptional results. The team's expertise in automation testing significantly improved our development workflow.",
      img: "https://i.pravatar.cc/150?img=11"
    },
    {
      name: "David Saden",
      role: "Tech Lead",
      text: "Their DevOps solutions transformed our deployment process. We've seen remarkable improvements in efficiency and reliability.",
      img: "https://i.pravatar.cc/150?img=3"
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      text: "The security audit and performance optimization services provided were thorough and exactly what we needed. Highly recommended!",
      img: "https://i.pravatar.cc/150?img=8"
    }
  ];

  return (
    <div id="services">
      {/* Services Grid */}
      <section style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <h2 className="section-title text-center" style={{ textAlign: 'center' }} data-aos="fade-up">
            Services <span className="accent-text">Offered</span>
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 4rem' }} data-aos="fade-up">
            Delivering exceptional technology solutions tailored to your infrastructure and quality assurance needs.
          </p>

          <div className="services-grid">
            {servicesList.map((service, index) => (
              <div
                key={index}
                className="service-card"
                data-aos="flip-left"
                data-aos-delay={index * 150}
              >
                <div className="service-card-icon">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <ul className="service-bullets">
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Process Section */}
      <section style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title text-center" style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
            My <span className="accent-text">Process</span>
          </h2>

          <div className="process-grid">
            {stepsList.map((step, index) => (
              <div
                key={index}
                className="process-card"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="process-card-icon">
                  <i className={`fas ${step.icon}`}></i>
                </div>
                <h4>{step.num}. {step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <h2 className="section-title text-center" style={{ textAlign: 'center', marginBottom: '4rem' }} data-aos="fade-up">
            Client <span className="accent-text">Testimonials</span>
          </h2>

          <div className="testimonials-grid">
            {testimonials.map((test, index) => (
              <div
                key={index}
                className="testimonial-card"
                data-aos="zoom-in"
                data-aos-delay={index * 150}
              >
                <div className="testimonial-header">
                  <img src={test.img} alt={test.name} className="testimonial-img" />
                  <div className="testimonial-info">
                    <h5>{test.name}</h5>
                    <p>{test.role}</p>
                  </div>
                </div>
                <p className="quote">"{test.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats counter strip */}
      <section className="stats-section" ref={statsRef}>
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item" data-aos="fade-up" data-aos-delay="100">
              <h2>{stats.projects}+</h2>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item" data-aos="fade-up" data-aos-delay="300">
              <h2>{stats.clients}+</h2>
              <p>Happy Clients</p>
            </div>
            <div className="stat-item" data-aos="fade-up" data-aos-delay="500">
              <h2>{stats.experience}+</h2>
              <p>Years Experience</p>
            </div>
            <div className="stat-item" data-aos="fade-up" data-aos-delay="700">
              <h2>24/7</h2>
              <p>Support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

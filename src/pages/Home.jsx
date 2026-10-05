import React, { useState, useEffect, useRef } from 'react';
import { CONFIG } from '../config';
import { HeroGraphic, AboutGraphic } from '../components/AnimatedSvg';
import testngLogo from '../assets/certs/testng.svg';
import oracleLogo from '../assets/certs/oracle_logo.png';
import awsLogo from '../assets/certs/aws_logo.png';
import aviatrixLogo from '../assets/certs/aviatrix_logo.png';
import ciscoLogo from '../assets/certs/cisco_logo.png';
import githubLogo from '../assets/certs/github_logo.png';

const Home = () => {
  // Typewriter effect
  const words = [CONFIG.fullName, "a Developer", "an Automation Expert", "a QA Engineer", "a DevOps Enthusiast"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const fullWord = words[currentWordIndex];
      if (!isDeleting) {
        // Typing
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullWord) {
          // Pause before deleting
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        // Deleting
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
          setTypingSpeed(300);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  // Experience Counter animation
  const [experience, setExperience] = useState(0.0);
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);

  const calculateExperience = () => {
    const startDate = new Date('2025-01-20');
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffYears = (diffTime / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1);
    return parseFloat(diffYears);
  };

  useEffect(() => {
    const targetYears = calculateExperience();

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        let start = 0;
        const duration = 1500; // milliseconds
        const stepTime = 30;
        const totalSteps = duration / stepTime;
        const increment = targetYears / totalSteps;

        const timer = setInterval(() => {
          start += increment;
          if (start >= targetYears) {
            setExperience(targetYears);
            clearInterval(timer);
          } else {
            setExperience(parseFloat(start.toFixed(1)));
          }
        }, stepTime);
      }
    }, { threshold: 0.2 });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  const skillIcons = [
    { name: "Python", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "Java", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "Selenium", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg" },
    { name: "Playwright", url: "https://api.iconify.design/logos:playwright.svg" },
    { name: "TestNG", url: testngLogo },
    { name: "Maven", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg" },
    { name: "AWS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Kubernetes", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg" },
    { name: "Linux", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
    { name: "Terraform", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg" },
    { name: "Docker", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "Jenkins", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg" },
    { name: "Git", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "Postman", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
    { name: "Grafana", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg" },
    { name: "Prometheus", url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg" }
  ];

  const certificationsList = [
    {
      title: "AWS Solution Architect Associate",
      issuer: "Amazon Web Services",
      logo: awsLogo,
      date: "Certified",
      skills: ["Cloud Architecture", "AWS Services", "VPC & Security", "Scalability"],
      link: CONFIG.socials.linkedin
    },
    {
      title: "GitHub Foundation",
      issuer: "GitHub",
      logo: githubLogo,
      date: "Certified",
      skills: ["Git", "GitHub Actions", "Repository Mgmt", "DevOps"],
      link: CONFIG.socials.linkedin
    },
    {
      title: "OCI 2024 Certified Foundations Associate",
      issuer: "Oracle Cloud Infrastructure",
      logo: oracleLogo,
      date: "Certified",
      skills: ["OCI Core Services", "Compute & Networking", "Security", "Identity"],
      link: CONFIG.socials.linkedin
    },
    {
      title: "Multicloud Network Associate - Aviatrix",
      issuer: "Aviatrix",
      logo: aviatrixLogo,
      date: "Certified",
      skills: ["Multicloud Networking", "Transit Routing", "Cloud Security", "MCNA"],
      link: CONFIG.socials.linkedin
    },
    {
      title: "Network Support and Security - CISCO",
      issuer: "Cisco Systems",
      logo: ciscoLogo,
      date: "Certified",
      skills: ["Network Security", "Routing & Switching", "TCP/IP", "Troubleshooting"],
      link: CONFIG.socials.linkedin
    }
  ];

  return (
    <div id="home">
      {/* Hero / Banner Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content" data-aos="fade-right" data-aos-duration="1000">
              <h3>Hello</h3>
              <h1>I am <span>{currentText}</span></h1>
              <h5>{CONFIG.tagline} @ {CONFIG.company}</h5>
              <div className="btn-group">
                <a href={CONFIG.socials.linkedin} target="_blank" rel="noreferrer" className="btn btn-primary">
                  <i className="fas fa-user-plus"></i> Hire Me
                </a>
                <a href={`mailto:${CONFIG.email}`} className="btn btn-secondary">
                  <i className="fas fa-envelope"></i> Mail Me
                </a>
                <a href={CONFIG.resumeUrl} target="_blank" rel="noreferrer" className="btn btn-outline">
                  <i className="fas fa-download"></i> Get CV
                </a>
              </div>
            </div>
            <div className="hero-image-container" data-aos="fade-left" data-aos-duration="1000">
              <HeroGraphic />
            </div>
          </div>
        </div>
        <div className="wave-container">
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-grid">
            <div data-aos="fade-right" data-aos-duration="1000">
              <AboutGraphic />
            </div>
            <div className="about-text" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
              <h2 className="section-title">Let's Introduce <span className="accent-text">About Myself</span></h2>
              <p>
                Transforming Code into Quality - Automating Excellence, One Test at a Time.
              </p>
              <p>
                Passionate and driven software professional with a strong background in software automation testing and expertise across diverse DevOps tools. Proficient in building robust automated testing frameworks, conducting performance and security testing, and automating infrastructure deployment to enhance product quality, efficiency, and security.
              </p>
              <a href={CONFIG.resumeUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                <span>Download CV</span> <i className="fas fa-download"></i>
              </a>
            </div>
          </div>

          {/* Technical Skills Sub-grid */}
          <div style={{ marginTop: '6rem' }}>
            <h2 className="section-title text-center" data-aos="fade-up" style={{ textAlign: 'center' }}>
              Technical <span className="accent-text">Skills</span>
            </h2>
            <div className="skills-grid">
              {skillIcons.map((skill, index) => (
                <div
                  key={index}
                  className="skill-card"
                  data-aos="zoom-in"
                  data-aos-delay={Math.min(index * 40, 400)}
                >
                  <img src={skill.url} alt={skill.name} className="skill-icon-img" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>

            <div className="counter-container" style={{ textAlign: 'center' }} data-aos="fade-up" ref={counterRef}>
              <div className="counter-box">
                <span className="counter-num">{experience}</span>
                <span className="counter-text">Years Experience Working</span>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div id="certifications" style={{ marginTop: '7rem' }}>
            <h2 className="section-title text-center" data-aos="fade-up" style={{ textAlign: 'center' }}>
              Professional <span className="accent-text">Certifications</span>
            </h2>
            <p style={{ textAlign: 'center', color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto 3rem' }} data-aos="fade-up">
              Validated industry certifications in Cloud Architecture, Automation, Multicloud Networking, and Infrastructure Security.
            </p>

            <div className="certifications-grid">
              {certificationsList.map((cert, index) => (
                <div
                  key={index}
                  className="cert-card"
                  data-aos="fade-up"
                  data-aos-delay={Math.min(index * 100, 400)}
                >
                  <div className="cert-card-header">
                    <img src={cert.logo} alt={cert.title} className="cert-logo" />
                    <div className="cert-info">
                      <h3>{cert.title}</h3>
                      <div className="cert-issuer">
                        <i className="fas fa-award"></i> {cert.issuer}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem' }}>
                    <span className="cert-badge-tag"><i className="fas fa-check-circle"></i> Verified Credential</span>
                  </div>

                  <div className="cert-tags">
                    {cert.skills.map((skill, idx) => (
                      <span key={idx} className="cert-tag">#{skill}</span>
                    ))}
                  </div>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary cert-verify-btn"
                  >
                    <i className="fab fa-linkedin" style={{ color: '#0a66c2' }}></i> View on LinkedIn
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;


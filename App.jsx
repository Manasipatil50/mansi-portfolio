import React from 'react';
import './App.css';

function App() {
  return (
    <div className="portfolio-app">
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="logo">Mansi Patil</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Main Content Area / Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Hi, I'm <span className="highlight">Mansi Patil</span></h1>
          <h2>React.js & Java Full Stack Developer</h2>
          <p>
            BCA graduate trained in building full-stack web applications using Java, 
            Spring Boot, React.js, and modern databases.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>
      </header>

      {/* About & Education Section */}
      <section id="about" className="about-section">
        <div className="section-container">
          <h2 className="section-title">About Me & Education</h2>
          <div className="about-grid">
            <div className="about-card bio-card">
              <h3>Who I Am</h3>
              <p>
                I am a passionate <strong>BCA Graduate</strong> (Class of 2025) with specialized training 
                in Java Full Stack Web Development from IT Vedant, Pune. I enjoy creating 
                responsive frontend interfaces and building structural backend architectures.
              </p>
              <p>
                With a strong foundational logic in Object-Oriented Programming, I love solving code bugs 
                and translating workflows into robust web services.
              </p>
            </div>

            <div className="about-card edu-card">
              <h3>Academic Background</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <h4>Bachelor of Computer Application (BCA)</h4>
                  <p className="edu-meta">2022 - 2025 | CGPA: 9.05/10</p>
                  <p className="edu-inst">RCPET's IMRD, Shirpur (KBCNMU, Jalgaon)</p>
                </div>
                <div className="timeline-item">
                  <h4>HSC (12th Grade)</h4>
                  <p className="edu-meta">Passed in 2022 | 87.30%</p>
                  <p className="edu-inst">Maharashtra State Board</p>
                </div>
                <div className="timeline-item">
                  <h4>SSC (10th Grade)</h4>
                  <p className="edu-meta">Passed in 2020 | 82.80%</p>
                  <p className="edu-inst">Maharashtra State Board</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Fully Restructured and Fixed */}
      <section id="skills" className="skills-section">
        <div className="section-container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skills-card">
              <h3>Frontend</h3>
              <ul className="skills-list">
                <li>React.js</li>
                <li>JavaScript (ES6+)</li>
                <li>HTML5</li>
                <li>CSS3</li>
              </ul>
            </div>
            <div className="skills-card">
              <h3>Backend</h3>
              <ul className="skills-list">
                <li>Core Java</li>
                <li>Spring Boot</li>
                <li>PHP</li>
                <li>ASP.NET</li>
              </ul>
            </div>
            <div className="skills-card">
              <h3>Database & Tools</h3>
              <ul className="skills-list">
                <li>MySQL / SQL Server</li>
                <li>Git & GitHub</li>
                <li>Postman</li>
                <li>REST APIs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header">
                <h3>Smart Event Booking System</h3>
                <span className="project-date">March 2026</span>
              </div>
              <p className="project-desc">
                Developed a full-stack event booking platform implementing secure role-based access control 
                for Admins, Vendors, and Users. Integrated business verification workflows alongside the Cashfree payment gateway.
              </p>
              <div className="project-tech">
                <span>React.js</span>
                <span>Spring Boot</span>
                <span>MySQL</span>
                <span>REST APIs</span>
              </div>
            </div>

            <div className="project-card">
              <div className="project-header">
                <h3>Art Gallery Management System</h3>
                <span className="project-date">February 2025</span>
              </div>
              <p className="project-desc">
                Built a web-based database architecture to systematically log artwork information, track pricing modifications, 
                and organize artist portfolios with a clean data management flow.
              </p>
              <div className="project-tech">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>PHP</span>
                <span>MySQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Clean Direct Filename Mapping */}
      <section id="contact" className="contact-section">
        <div className="section-container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-wrapper">
            <div className="contact-image-card">
              <img src="manasi.jpeg" alt="Mansi Patil" className="profile-img" />
            </div>
            <div className="contact-card">
              <p>I am currently looking for Software Development and Application Support roles. Let's connect!</p>
              <div className="contact-info">
                <p>📧 Email: <a href="mailto:mansipatil7028@gmail.com">mansipatil7028@gmail.com</a></p>
                <p>📞 Phone: +91 8767292361</p>
                <p>📍 Location: Pune, Maharashtra</p>
              </div>
              <div className="contact-links">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn btn-secondary">LinkedIn</a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="btn btn-secondary">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Mansi Patil. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

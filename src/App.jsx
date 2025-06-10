import React, { useState } from 'react';
import './App.css';
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">Muluken</div>
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          &#9776;
        </div>
        <ul className={`menu ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>

      {/* Home Section */}
      <section id="home" className="home-section">
        <div className="home-content">
          <div className="home-left">
            <h1>Hi, my name is</h1>
            <h2 className="highlight-name">muluken dile</h2>
            <h3>And I'm a <span className="highlight">Frontend Developer</span></h3>
          </div>
          <div className="home-right">
            <div className="glow-circle">
              <img src="/mulu.jpg" alt="muluken" className="profile-image" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-content">
          <div className="about-left">
            <h2>About Me</h2>
            <p>
            I am an experienced Frontend Developer with over a decade of professional expertise in the field.Throghout my career.i have had the privilege of collaborating with prestigious organization.contributing to their success and growth.
            </p>
            <p>
              My passion for frontend developmentis not only reflected in my extensive experience.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <h2 className="skills-title">My skills</h2>
      <div className="skills-skill">
          <div className="skill-label">
            <span>HTML</span>
            <span className="percent">90%</span>
          </div>
          <div className="skills-bar">
            <div className="skills-progress progress html"></div>
          </div>
        </div>

        <div className="skills-skill">
          <div className="skill-label">
            <span>CSS</span>
            <span className="percent">85%</span>
          </div>
          <div className="skills-bar">
            <div className="skills-progress progress css"></div>
          </div>
        </div>

        <div className="skills-skill">
          <div className="skill-label">
            <span>React</span>
            <span className="percent">80%</span>
          </div>
          <div className="skills-bar">
            <div className="skills-progress progress react"></div>
          </div>
        </div>

        <div className="skills-skill">
          <div className="skill-label">
            <span>GitHub</span>
            <span className="percent">70%</span>
          </div>
          <div className="skills-bar">
            <div className="skills-progress progress github"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <h2>My Services</h2>
        <div className="service-boxes">
          <div className="service-card">
            <h3>Web Design</h3>
            <p>Building full-stack applications using modern tools.</p>
          </div>
          <div className="service-card">
            <h3>Apps Design</h3>
            <p>Building full-stack appl.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <div className="contact-container">
          <div className="contact-details">
      
            <p><strong>Phone:</strong> <a href="tel:+251993048947">+251 993048947</a></p>
            <p><strong>Email:</strong> <a href="mailto:">mulukendile@gmail.com</a></p>
            <p><strong>Address:</strong> Debre Markos, Ethiopia</p>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="tel" placeholder="Your Phone Number" required />
            <textarea placeholder="Your Message" rows="4" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>© 2025 Muluken. All rights reserved.</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <SiTiktok />
            </a>
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
              <FaTelegramPlane />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

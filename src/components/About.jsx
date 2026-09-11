import React from 'react';
import { FaDownload } from 'react-icons/fa';
import resumeFile from '../Assets/Sayasri_resume(1).pdf';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* Left Column - Image */}
        <div className="about-image-col">
          <div className="about-photo-frame">
            <img
              src="src\Assets\chat.png"
              alt="Sayasri Balaji"
              className="about-profile-img"
            />
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="about-content-col">
          <div className="about-header-tag">
            <span className="tag-line"></span>
            <span className="tag-text">Discover</span>
          </div>

          <h2 className="about-main-title">About Me</h2>

          <p className="about-lead">
            I'm <strong>Sayasri Balaji</strong>, a passionate Frontend Developer and UI enthusiast based in Krishnagiri, Tamil Nadu, India.
          </p>

          <p className="about-desc">
            With a strong foundation in HTML5, CSS3, JavaScript, and React.js, I enjoy transforming creative designs into functional, responsive web applications with a focus on clean code and modern design principles.
          </p>

          {/* Details Grid Box */}
          <div className="about-details-grid">
            <div className="detail-item">
              <span className="Contact">Name:</span>
              <span className="Value">Sayasri Balaji</span>
            </div>
            <div className="detail-item">
              <span className="Contact">Degree:</span>
              <span className="Value">B.E. CSE</span>
            </div>
            <div className="detail-item">
              <span className="Contact">Location:</span>
              <span className="Value">Krishnagiri, India</span>
            </div>
            <div className="detail-item">
              <span className="Contact">Freelance:</span>
              <span className="Value">Available</span>
            </div>
            <div className="detail-item">
              <span className="Contact">Experience:</span>
              <span className="Value">Fresher / Ready</span>
            </div>
            <div className="detail-item">
              <span className="Contact">Status:</span>
              <span className="Value">Open to Work</span>
            </div>
          </div>

          {/* Action Button */}
          <div className="about-action">
            <a href={resumeFile} download="Sayasri_Balaji_Resume.pdf" className="download-cv-btn">
             <FaDownload /> DOWNLOAD CV
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
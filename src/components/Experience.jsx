import React from 'react';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import './Experience.css';

const Experience = () => (
  <section id="experience" className="section experience-section">
    <div className="container">
      <h2 className="section-title reveal">Internship</h2>
      <div className="experience-timeline reveal">

        {/* Internship Card */}
        <div className="experience-card">
          <div className="experience-icon"><FaBriefcase /></div>
          <div className="experience-content">
            <h3 className="experience-title">Frontend Development Intern</h3>
            <h4 className="experience-company">Mechnido Seed Company</h4>
            <span className="experience-duration">3 Months</span>
            <p className="experience-description">
              Worked on frontend development and learned practical web development skills.
              Gained hands-on experience in building responsive websites and implementing modern UI/UX principles.
            </p>
            <div className="experience-skills">
              {['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'].map((skill) => (
                <span key={skill} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Training / Course Card */}
        <div className="experience-card">
          <div className="experience-icon"><FaGraduationCap /></div>
          <div className="experience-content">
            <h3 className="experience-title">Trained Frontend Developer</h3>
            <h4 className="experience-company">Code Purple Academy</h4>
            <span className="experience-duration">3 Months</span>
            <p className="experience-description">
              Completed structured training in frontend development, covering core web technologies
              and hands-on projects to strengthen practical coding and UI development skills.
            </p>
            <div className="experience-skills">
              {['HTML5', 'CSS3', 'JavaScript', 'React.js','Responsive Design'].map((skill) => (
                <span key={skill} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default Experience;
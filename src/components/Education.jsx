import React from 'react';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';
import './Education.css';

const Education = () => (
  <section id="education" className="section education-section">
    <div className="container">
      <h2 className="section-title reveal">Education</h2>
      <div className="education-container reveal">

        {/* Degree */}
        <div className="education-card">
          <div className="education-icon"><FaGraduationCap /></div>
          <div className="education-content">
            <h3 className="education-degree">Bachelor of Engineering (B.E.)</h3>
            <h4 className="education-field">Computer Science and Engineering</h4>
            <p className="education-institution">Chendhuran College of Engineering and Technology, Pudukkottai</p>
            <span className="education-year">2022 - 2026</span>
            <p className="education-description">
              Studied web development fundamentals, frontend technologies, responsive design, JavaScript, React.js, and modern UI development.
            </p>
          </div>
        </div>

        {/* School */}
        <div className="education-card">
          <div className="education-icon"><FaSchool /></div>
          <div className="education-content">
            <h3 className="education-degree">Higher Secondary Education (HSC)</h3>
            <h4 className="education-field">D.K.Samy Matric Higher Secondary School</h4>
            <p className="education-institution">Krishnagiri</p>
            <span className="education-year">2021 - 2022</span>
            <p className="education-description">
              Completed higher secondary education with a strong foundation in mathematics and computer science.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default Education;
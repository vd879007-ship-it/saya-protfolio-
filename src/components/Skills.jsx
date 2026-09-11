import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiRedux } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skills = [
    ['HTML5', <FaHtml5 />, '#e34c26'],
    ['CSS3', <FaCss3Alt />, '#264de4'],
    ['JavaScript', <FaJs />, '#f0db4f'],
    ['React.js', <FaReact />, '#61dbfb'],
    ['Redux', <SiRedux />, '#764abc'],
    ['Tailwind CSS', <SiTailwindcss />, '#06b6d4'],
    ['Bootstrap', <SiBootstrap />, '#7952b3'],
    ['Figma', 'Fi', '#f24e1e'],
    ['Photoshop', 'Ps', '#31a8ff'],
    ['Git & GitHub', <FaGitAlt />, '#f05032'],
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title reveal">Technical Skills</h2>

        <div className="skills-grid reveal">
          {skills.map(([name, icon, color], index) => (
            <div
              key={name}
              className="skill-card"
              style={{ '--skill-color': color, '--delay': `${index * 0.15}s` }}
            >
              <div className="skill-icon" style={{ color }}>
                {icon}
              </div>

              <h3 className="skill-name">{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
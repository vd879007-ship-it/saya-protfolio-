import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      name: 'Fundun Holidays',
      description: 'Premium South India travel agency website with destinations, tour packages, booking section, reviews, gallery, and responsive UI.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: "src/Assets/port1.png",
      liveUrl: 'https://fundun.vercel.app/',
      githubUrl: 'https://github.com/Sayasri123'
    },
    {
      name: 'Gym Website',
      description: 'Responsive gym website with a modern user interface, workout plans, membership information, and contact section.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=500&fit=crop',
      liveUrl: 'https://gym-portfolio-two.vercel.app/',
      githubUrl: 'https://github.com/Sayasri123'
    },
    {
      name: 'Mseed Website',
      description: 'Responsive website using HTML, CSS, and JavaScript with modern design principles and a smooth user experience.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      liveUrl: 'https://mseed-three.vercel.app/',
      githubUrl: 'https://github.com/Sayasri123'
    },

     {
      name: 'Instagram clone',
      description: 'Responsive website using HTML, CSS, and JavaScript with modern design principles and a smooth user experience.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: "src/Assets/port2.png",
      liveUrl: '#',
      githubUrl: 'https://github.com/Sayasri123'
    },

     {
      name: 'Portfolio',
      description: 'Responsive website using HTML, CSS, and JavaScript with modern design principles and a smooth user experience.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: "src/Assets/port3.jpg",
      liveUrl: '#',
      githubUrl: 'https://github.com/Sayasri123'
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title reveal">Projects</h2>
        <div className="projects-grid reveal">
          {projects.map((project) => (
            <div key={project.name} className="project-card">
              <div className="project-image-container">
                <img src={project.image} alt={project.name} className="project-image" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveUrl} className="project-link" aria-label={`${project.name} live demo`}>
                      <FaExternalLinkAlt />
                    </a>
                    <a href={project.githubUrl} className="project-link" aria-label={`${project.name} GitHub`}>
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
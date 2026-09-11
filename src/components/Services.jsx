import React from 'react';
import { FaLaptopCode, FaPalette, FaMobileAlt } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: 'Frontend Development',
      description: 'Building responsive and interactive web applications using React.js, HTML5, CSS3, and JavaScript.'
    },
    {
      icon: <FaPalette />,
      title: 'UI Design',
      description: 'Creating visually appealing and user-friendly interfaces with attention to detail and modern design principles.'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Responsive Design',
      description: 'Ensuring websites look and function well across mobile phones, tablets, and desktop screens.'
    }
  ];

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <h2 className="section-title reveal">Services</h2>
        <div className="services-grid reveal">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card"
              style={{ '--delay': `${index * 0.2}s` }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
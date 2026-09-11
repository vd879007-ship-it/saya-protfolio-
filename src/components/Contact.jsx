import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Thanks! Your message is ready. Connect through the email or social links below.');
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setFormStatus(''), 5000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'sayasri.balaji@email.com',
      href: 'mailto:sayasri.balaji@email.com'
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Krishnagiri, Tamil Nadu, India',
      href: '#contact'
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/sayasri-balaji',
      href: 'https://www.linkedin.com/in/sayasri-balaji-4b56a037b/'
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: 'github.com/sayasri-balaji',
      href: 'https://github.com/Sayasri123'
    }
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title reveal">Contact Me</h2>

        <div className="contact-content reveal">
          <div className="contact-info">
            <h3 className="contact-subtitle">Let's Connect</h3>
            <p className="contact-description">
              I'm currently looking for opportunities as a Frontend Developer.
              Whether you have a question, a project idea, or just want to say hi,
              feel free to reach out!
            </p>

            <div className="contact-details">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="contact-detail-item"
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <div className="contact-detail-icon">{info.icon}</div>
                  <div className="contact-detail-text">
                    <span className="detail-label">{info.label}</span>
                    <span className="detail-value">{info.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="form-textarea"
              />
              <button type="submit" className="submit-btn">
                Hire me <FaPaperPlane className="btn-icon" />
              </button>
              {formStatus && <p className="form-status">{formStatus}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
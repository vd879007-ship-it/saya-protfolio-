import React from 'react';
import { FaLinkedin, FaGithub, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-name">Sayasri Balaji</h3>
            <p className="footer-role">Frontend Developer</p>
          </div>

          <div className="footer-social">
            <a href="https://www.linkedin.com/in/sayasri-balaji-4b56a037b/" className="footer-social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Sayasri123" className="footer-social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Sayasri Balaji. Made with <FaHeart className="heart-icon" /> and React.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
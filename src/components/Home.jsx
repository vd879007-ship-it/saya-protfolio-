import React from 'react';
import { FaLinkedin, FaGithub, FaArrowRight } from 'react-icons/fa';
import mineImg from '../Assets/mine.jpeg';
import './Home.css';

const Home = () => {
  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/sayasri-balaji-4b56a037b/',
      label: 'LinkedIn'
    },
    {
      icon: <FaGithub />,
      url: 'https://github.com/Sayasri123',
      label: 'GitHub'
    }
  ];

  return (
    <>
      <section id="home" className="home-section">

        <div className="home-container">

          {/* LEFT CONTENT */}
          <div className="home-content">

            <div className="hello-badge">
              Hello There!
            </div>

            <h1>
              I'm <span>Sayasri Balaji,</span>
            </h1>

            <h2>
              Frontend Developer
              
            </h2>

            <p className="home-description">
              I'm a passionate frontend developer and UI enthusiast
              who enjoys creating clean, responsive, and user-friendly
              web experiences.
            </p>

            <div className="home-buttons">

              <a href="#projects" className="portfolio-btn">
                View My Projects
                <span>
                  <FaArrowRight />
                </span>
              </a>

              <a href="#contact" className="hire-btn">
                Hire Me
              </a>

            </div>

            <div className="home-social">

              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}

            </div>

          </div>


          {/* RIGHT IMAGE */}
          <div className="home-visual">

            <div className="photo-frame">
              <img
                src={mineImg}
                alt="Sayasri Balaji"
                className="profile-image"
              />
            </div>

            <span className="decor-star star-one">✦</span>
            <span className="decor-star star-two">✦</span>

          </div>

        </div>

      </section>


      {/* BOTTOM SKILL BAR (STRAIGHT & ANIMATED) */}
      <div className="skill-marquee">
        <div className="marquee-track">
          
          {/* First set */}
          <div className="marquee-content">
            <span>Javascript</span>
            <b>✳</b>
            <span>Website Design</span>
            <b>✳</b>
            <span>React.js</span>
            <b>✳</b>
            <span>HTML</span>
            <b>✳</b>
            <span>Tailwindcss</span>
            <b>✳</b>
            <span>Frontend Development</span>
            <b>✳</b>
            <span>UIandUx design</span>
            <b>✳</b>
          </div>

          <div className="marquee-content" aria-hidden="true">
            <span>Javascript</span>
            <b>✳</b>
            <span>Website Design</span>
            <b>✳</b>
            <span>React.js</span>
            <b>✳</b>
            <span>HTML</span>
            <b>✳</b>
            <span>Tailwindcss</span>
            <b>✳</b>
            <span>Frontend Development</span>
            <b>✳</b>
            <span>UIandUx design</span>
            <b>✳</b>
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;
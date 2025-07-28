import React from 'react';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <h1 className="about-heading">About Me</h1>
          <p className="about-description">
            I am a passionate and driven aspiring Full Stack Developer with strong skills in building responsive and user-friendly websites and applications. I specialize in creating engaging front-end experiences using <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>React.js</strong>.  
          </p>
          <p className="about-description">
            I am also expanding my expertise on backend technologies like <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MySQL</strong> to develop robust and scalable web applications. I thrive on solving problems and continuously learning through real-world projects.
          </p>
          <p className="about-description">
            My goal is to deliver complete, efficient, and visually appealing digital solutions while growing as a full-stack developer.
          </p>
        </div>

        <div className="skills-section">
          <h2 className="skills-heading">Technical Skills</h2>

          <div className="skill">
            <p>HTML & CSS</p>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: '85%' }}></div>
            </div>
          </div>

          <div className="skill">
            <p>React.js</p>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: '75%' }}></div>
            </div>
          </div>

          <div className="skill">
            <p>JavaScript (ES6+)</p>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: '70%' }}></div>
            </div>
          </div>

          <div className="skill">
            <p>Node.js & Express</p>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: '60%' }}></div>
            </div>
          </div>

          <div className="skill">
            <p>MySQL & Databases</p>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: '65%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

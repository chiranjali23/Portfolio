import React from 'react';
import my from '../../../Image/my.jpeg';
import './Hero.css';

export default function Hero() {
  return (
    <div id="home" className='hero'>
      <div className='hero-container'>
        <div className='hero-text'>
          <h1>Hi, I'm <span className='name'>CHIRANJALI</span></h1>
          <p>I'm an undergraduate student.</p>
          <p>
            I'm an enthusiastic and dedicated learner aiming to become a Full Stack Developer.
            I enjoy crafting responsive and interactive user interfaces using HTML, CSS, JavaScript, and React.
            At the same time, I’m exploring backend technologies like Node.js, Express, and MySQL to build strong and reliable web applications.
            My goal is to create complete and user-friendly digital solutions while continuously improving my skills through hands-on projects and real-world challenges.
          </p>
        </div>

        <div className='image-wrapper'>
          <img src={my} alt="My portrait" className='hero-img' />
        </div>
      </div>

      <div className='Details'>
        <div className='hero-btns'>
          <a href='/MY CV.pdf'
          download='MY CV.pdf'
          target='_blank'
          rel ="noopener noreferrer"
          style={{color:'white',textDecoration :'none'}}>Download My CV</a>
        </div>

        <div className='hero-btns' onClick={() => {
          const section = document.getElementById('MyProjects');
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
          }}>View My Work</div>
      </div>
    </div>
  );
}

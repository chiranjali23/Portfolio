import React from 'react';
import './Project.css';
import my_project from '../../assets1/MyProject.js'; // ✅ Make sure this path is correct!
import {FaArrowRight} from 'react-icons/fa';




export default function Project() {
  const projectList = Object.values(my_project); 

  return (
    <div id ="MyProjects" className='project'>
      <div className="project-title">
        <h1>My Projects</h1>
        <p className="project-description">
          Welcome to my project showcase! Here are some of the projects I've worked on.
        </p>
      </div>

      <div className="project-list">
        {projectList.map((project, index) => (
          <div className="project-item" key={index}>
            <img src={project.img} alt={project.name} link ={project.github}className="project-image" />
            <h2 className="project-name">{project.name}</h2>
            <a href className="project-link">{project.github}</a>
          </div>
        ))}
  
      </div>

      <div className='show-more'>
          <p>Show more <FaArrowRight/></p>
          
        
      </div>
    </div>
  );
}

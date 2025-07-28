import React, { useRef } from 'react';
import './Navbar.css';
import logo4 from '../../../src/Image/logo4.png';
import { FaBars,FaTimes} from 'react-icons/fa';


export default function Navbar() {
  const menuRef = useRef(); 

  const OpenMenu = () => {
    menuRef.current.style.right = "0";
  };

  const CloseMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  
  return (
    <div className="NavbarContainer">
      <img src={logo4} alt="logo" className="logo" />
      <FaBars className='nav-mob-open' onClick={OpenMenu} />
      
      
      <div className="Navbar" ref={menuRef}>
        <FaTimes className='nav-mob-close' onClick={CloseMenu} />
        <a href = "#home">Home</a>
        <a href = "#about">About Me</a>
        <a href = "#MyProjects">Projects</a>
        <a href="#Contact">Contact</a>

        
      </div>

      <a href ="#Contact" className='new-connect'>Connect with Me</a>
    </div>
  );
}

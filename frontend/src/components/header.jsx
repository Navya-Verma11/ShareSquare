// components/Header.js
import React from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import logo from '../assets/images/logo.png'

function Header() {
    const navigate = useNavigate();
  return (
    <header className="container">
      <nav className="flex space-between">
        <div className="left flex items-center">
          <nav id="navbar">
            <div id="logo">
              <img src={logo} alt="ShareSquare.com" />
            </div>
            <ul>
              <li className="item"><a href="#home">PROFILE</a></li>
              <li className="item"><a href="resources">RESOURCES</a></li>
              <li className="item"><a href="collab">COLLAB</a></li>
              <li className="item"><a href="opportunities">OPPORTUNITIES</a></li>
              <li className="item"><a href="Blogs">BLOGS AND NEWS</a></li>
              <li className="item"><a href="roundtable">ROUNDTABLE</a></li>
              <li className="item"><a href="login.html">SIGN IN</a></li>
            </ul>
          </nav>
        </div>
      </nav>
    </header>
  );
}

export default Header;

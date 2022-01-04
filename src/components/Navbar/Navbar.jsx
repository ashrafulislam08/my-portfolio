import React from 'react';
import './Navbar.css';
const Navbar = () => {
  return (
    <section>
      <nav>
        <div className="logo">
          <a href="#">
            <h2>
              Ashraful Islam
            </h2>
          </a>
        </div>
        <div className="navbar">
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#" className="link">Resume</a></li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
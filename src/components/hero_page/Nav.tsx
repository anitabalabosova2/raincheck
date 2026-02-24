import React from "react";
import logo from '../../assets/21GRAMS logo.png';

const Nav: React.FC = () => {
  return (
    <header className="nav">
      <div className="nav-left">
        <img
          src={logo}
          alt="21GRAMS"
          style={{ width: "150px", height: "auto" }}
        />
      </div>

      <nav className="nav-center">
        <a href="#">Who We Are</a>
        <a href="#">What We Do</a>
        <a href="#">Work With Us</a>
      </nav>
    </header>
  );
};

export default Nav;

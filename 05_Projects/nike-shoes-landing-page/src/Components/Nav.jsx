import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav className="container">
        <div className="logo">
          <img src="/images/brand_logo.png" alt="logo" />
        </div>

        <div className="links">
          <a href="#menu">Menu</a>
          <a href="#loaction">Location</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <button>Log in</button>
      </nav>
    </div>
  );
};

export default NavBar;

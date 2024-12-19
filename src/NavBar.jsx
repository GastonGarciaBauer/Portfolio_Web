import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <a href="#about">Sobre mi</a>
        <a href="#projects">Proyectos</a>
      </div>
      <div className="nav-right">
        <a href="#github">Github</a>
        <a href="#linkedin">Linkedin</a>
        <img
          className="profile-pic"
          src="https://via.placeholder.com/32"
          alt="perfil"
        />
      </div>
    </nav>
  );
}

export default Navbar;

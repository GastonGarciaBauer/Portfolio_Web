import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-left">
          <a href="#about">Sobre Javier</a>
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
      <header className="main-header">
        <h1 className="logo">
          <span className="letter" style={{ color: "#4285F4" }}>
            J
          </span>
          <span className="letter" style={{ color: "#EA4335" }}>
            a
          </span>
          <span className="letter" style={{ color: "#FBBC05" }}>
            v
          </span>
          <span className="letter" style={{ color: "#34A853" }}>
            i
          </span>
          <span className="letter" style={{ color: "#EA4335" }}>
            e
          </span>
          <span className="letter" style={{ color: "#4285F4" }}>
            r
          </span>
        </h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar con Google"
            className="search-bar"
          />
          <div className="buttons">
            <button>Buscar con Google</button>
            <button>Voy a tener suerte</button>
          </div>
        </div>
      </header>
      <footer className="footer">
        <div>España</div>
        <div className="footer-links">
          <a href="#quien-soy">Quién soy</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#estudios">Estudios</a>
          <a href="#conocimientos">Conocimientos</a>
          <a href="#curriculum">Currículum</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
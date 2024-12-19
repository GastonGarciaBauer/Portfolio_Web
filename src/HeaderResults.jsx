import React from 'react';
import './HeaderResults.css';

// Importa la imagen desde la carpeta assets
import gastonGoogleLogo from './assets/gaston_google.png';

const HeaderResults = () => {
  return (
    
    <div className="header-container">
      <div className="header-top">
        {/* Logo de Google en la esquina superior izquierda */}
        <img src={gastonGoogleLogo} alt="Google Logo" className="google-logo" />

        {/* Barra de búsqueda */}
        <div className="search-bar">
          <input type="text" placeholder="Buscar en Google" />
          <button className="search-button">Buscar</button>
        </div>
      </div>

      {/* Botones de navegación (como los de Google) */}
      <div className="header-bottom">
        <button className="nav-button">Todo</button>
        <button className="nav-button">Experiencia</button>
        <button className="nav-button">Educación</button>
        <button className="nav-button">Conocimientos</button>
        <button className="nav-button">Proyectos</button>
        <button className="nav-button">Linkedin</button>
        <button className="nav-button">Github</button>

      </div>
    </div>
  );
};

export default HeaderResults;

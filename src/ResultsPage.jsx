import React from "react";
import { Link } from "react-router-dom";
import "./ResultsPage.css"; // Asegúrate de tener un archivo CSS para estilizar este componente

function ResultsPage() {
  return (
    <div className="results-page">
      <header className="results-header">
        <h1>Resultados de búsqueda</h1>
        <div className="search-info">
          <p>Mostrando resultados para "X"</p>
        </div>
      </header>

      <div className="results-container">
        <div className="result">
          <h2>
            <a href="#">Resultado 1 - Título de ejemplo</a>
          </h2>
          <p>Descripción del resultado de búsqueda 1. Aquí va el texto de ejemplo.</p>
        </div>
        <div className="result">
          <h2>
            <a href="#">Resultado 2 - Título de ejemplo</a>
          </h2>
          <p>Descripción del resultado de búsqueda 2. Aquí va el texto de ejemplo.</p>
        </div>
        <div className="result">
          <h2>
            <a href="#">Resultado 3 - Título de ejemplo</a>
          </h2>
          <p>Descripción del resultado de búsqueda 3. Aquí va el texto de ejemplo.</p>
        </div>
      </div>

      <footer className="results-footer">
        <div>
          <Link to="/">Volver a la página principal</Link>
        </div>
        <div className="footer-links">
          <a href="#quien-soy">Quién soy</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#estudios">Educación</a>
          <a href="#conocimientos">Conocimientos</a>
          <a href="#curriculum">Currículum</a>
        </div>
      </footer>
    </div>
  );
}

export default ResultsPage;

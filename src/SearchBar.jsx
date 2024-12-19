import React from "react";
import { useNavigate } from "react-router-dom"; // Cambiado a useNavigate

function SearchBar() {
  const navigate = useNavigate(); // Usamos useNavigate en lugar de useHistory

  const handleSearch = () => {
    navigate("/HeaderResults"); // Redirige a la página de resultados
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar con Google"
        className="search-bar"
      />
      <div className="buttons">
        <button onClick={handleSearch}>Buscar con Google</button>
        <button>Voy a tener suerte</button>
      </div>
    </div>
  );
}

export default SearchBar;

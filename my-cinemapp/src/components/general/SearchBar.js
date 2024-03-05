import './general.css';
import React from 'react';

const SearchBar = ({ title, setTitle }) => {
  // Manejar cambios en el input
  const handleInput = (event) => {
    setTitle(event.target.value);
  };

  return (
    <input
      type="text"
      className="search-bar"
      value={title}
      onChange={handleInput}
      placeholder="Buscar..."
    />
  );
};

export default SearchBar;

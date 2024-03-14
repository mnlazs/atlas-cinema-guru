import React from 'react';
import './movies.css';
import SearchBar from './SearchBar';
import Tag from './Tag';

function Filter({ minYear, setMinYear, maxYear, setMaxYear, sort, setSort, genres, setGenres, title, setTitle }) {
  
  const handleYearChange = (event, isMinYear) => {
    const year = parseInt(event.target.value, 10);
    if (isMinYear) {
      setMinYear(year);
    } else {
      setMaxYear(year);
    }
  };

  // Función para manejar el cambio en el select de ordenación
  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  // Los géneros de películas para los Tags
  const genreOptions = ['action', 'drama', 'comedy', 'biography', 'romance', 'thriller', 'war', 'history', 'sport', 'sci-fi', 'documentary', 'crime', 'fantasy'];

  return (
    <div className="filter-container">
      <SearchBar title={title} setTitle={setTitle} />
      <input 
        type="number" 
        value={minYear} 
        onChange={(e) => handleYearChange(e, true)}
        placeholder="Min Year" 
      />
      <input 
        type="number" 
        value={maxYear} 
        onChange={(e) => handleYearChange(e, false)}
        placeholder="Max Year" 
      />
      <select value={sort} onChange={handleSortChange}>
        <option value="latest">Latest</option>
        <option value="oldest">Oldest</option>
        <option value="highestrated">Highest Rated</option>
        <option value="lowestrated">Lowest Rated</option>
      </select>
      <div className="tags-container">
        {genreOptions.map((genre, index) => (
          <Tag 
            key={index} 
            genre={genre} 
            filter={true} 
            genres={genres} 
            setGenres={setGenres} 
          />
        ))}
      </div>
    </div>
  );
}

export default Filter;

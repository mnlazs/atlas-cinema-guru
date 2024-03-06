import React from 'react';
import './movies.css';
//import SearchBar from './SearchBar';
//import SelectInput from './SelectInput';
import Tag from './Tag';

function Filter({ minYear, setMinYear, maxYear, setMaxYear, sort, setSort, genres, setGenres, title, setTitle }) {
  // Opciones de ordenación para el SelectInput, ejemplo simple
  const sortOptions = [
    { value: 'latest', label: 'Latest' },
    { value: 'oldest', label: 'Oldest' },
    { value: 'highestrated', label: 'Highest Rated' },
    { value: 'lowestrated', label: 'Lowest Rated' },
  ];

  const genreOptions = ['action', 'drama', 'comedy', 'biography', 'romance', 'thriller', 'war', 'history', 'sport', 'sci-fi', 'documentary', 'crime', 'fantasy'];

  return (
    <div className="filter-container">
      {/* <SearchBar title={title} setTitle={setTitle} /> */}
      <input type="number" value={minYear} onChange={e => setMinYear(e.target.value)} placeholder="Min Year" />
      <input type="number" value={maxYear} onChange={e => setMaxYear(e.target.value)} placeholder="Max Year" />
      {/* <SelectInput options={sortOptions} value={sort} onChange={setSort} /> */}
      {genreOptions.map((genre, index) => (
        <Tag key={index} genre={genre} filter={true} genres={genres} setGenres={setGenres} />
      ))}
    </div>
  );
}

export default Filter;

import React, { useState, useEffect } from 'react';
import './movies.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faClock } from '@fortawesome/free-solid-svg-icons';

function MovieCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);

  useEffect(() => {
    // Aquí iría la lógica para comprobar si la película está en favoritos o en ver más tarde
  }, [movie]);

  const handleClick = (type) => {
    // Lógica para manejar el clic en los iconos
  };

  return (
    <li className="movie-card">
      <FontAwesomeIcon icon={faHeart} onClick={() => handleClick('favorite')} className={isFavorite ? 'favorite' : ''} />
      <FontAwesomeIcon icon={faClock} onClick={() => handleClick('watchlater')} className={isWatchLater ? 'watch-later' : ''} />
      <h3>{movie.title}</h3>
      <p>{movie.synopsis}</p>
      {/* Muestra los géneros de la película */}
    </li>
  );
}

export default MovieCard;

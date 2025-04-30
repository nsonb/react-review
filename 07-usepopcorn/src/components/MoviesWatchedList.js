import { useState } from 'react';
import { average } from '../utils';
import ToggleBox from './ui/ToggleBox';

const MovieWatchedList = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const { watched } = props;
  return (
    <ToggleBox>
      <div className="summary">
        <h2>Movies you watched</h2>
        <MovieStats watched={watched} />
      </div>

      <MovieList watched={watched} />
    </ToggleBox>
  );
};

const MovieStats = (props) => {
  const { watched } = props;
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));
  return (
    <div>
      <p>
        <span>#️⃣</span>
        <span>{watched.length} movies</span>
      </p>
      <p>
        <span>⭐️</span>
        <span>{avgImdbRating}</span>
      </p>
      <p>
        <span>🌟</span>
        <span>{avgUserRating}</span>
      </p>
      <p>
        <span>⏳</span>
        <span>{avgRuntime} min</span>
      </p>
    </div>
  );
};

const MovieList = (props) => {
  const { watched } = props;
  return (
    <ul className="list">
      {watched.map((movie) => (
        <li key={movie.imdbID}>
          <img src={movie.Poster} alt={`${movie.Title} poster`} />
          <h3>{movie.Title}</h3>
          <div>
            <p>
              <span>⭐️</span>
              <span>{movie.imdbRating}</span>
            </p>
            <p>
              <span>🌟</span>
              <span>{movie.userRating}</span>
            </p>
            <p>
              <span>⏳</span>
              <span>{movie.runtime} min</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MovieWatchedList;

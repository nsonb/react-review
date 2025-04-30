import ToggleBox from './ui/ToggleBox';

const MovieSearchResult = (props) => {
  const { movies } = props;
  return (
    <ToggleBox>
      <ul className="list">
        {movies?.map((movie) => (
          <li key={movie.imdbID}>
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
            <h3>{movie.Title}</h3>
            <div>
              <p>
                <span>🗓</span>
                <span>{movie.Year}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </ToggleBox>
  );
};

export default MovieSearchResult;

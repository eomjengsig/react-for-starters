import { Link } from "react-router-dom";
const Movie = ({ movie }) => {
  return (
    <div>
      <img src={movie.medium_cover_image} />
      <h2>
        <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
      </h2>
      <h4>{movie.year}</h4>
      <p>{movie.summary}</p>
      <ul>
        {movie.genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
};

export default Movie;

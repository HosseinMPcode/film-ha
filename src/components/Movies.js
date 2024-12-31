import { NavLink } from "react-router-dom";
import "./../styles/Movie.css";

export default function Movies({ movies }) {
  return (
    <div className="moviesContainer d-flex flex-column align-items-center align-items-sm-start flex-sm-row">
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.name} />
      ))}
    </div>
  );
}

function Movie({ movie }) {
  console.log(movie);
  return (
    <NavLink to={movie.name} style={{ textDecoration: "none" }}>
      <div className="movieImage rounded">
        <img className="w-100 rounded" src={movie.img} alt="movie" />
        <p className="text-center aboutMovie">{movie.name}</p>
      </div>
    </NavLink>
  );
}

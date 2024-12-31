import { NavLink } from "react-router-dom";
import Actors from "./Actors";

export default function MovieDetails({ movie, actors, nextMovie }) {
  const movieRoute = window.location.pathname;
  console.log(movieRoute);
  return (
    <>
      <div className="d-flex justify-content-around mt-5">
        <div className="w-50">
          <p className=" p-5  border border-secondary rounded" dir="rtl">
            {movie.details}
          </p>
          <Actors actors={actors} movieRoute={movieRoute} />
        </div>
        <div className="d-flex flex-column  align-items-center">
          <img
            className="rounded"
            src={movie.img}
            style={{ width: "150px" }}
            alt="..."
          />
          <span>{movie.name}</span>
          <span>8/10</span>
        </div>
      </div>
      <div style={{ width: "90px", margin: "60px" }}>
        <Movie movie={nextMovie} />
      </div>
    </>
  );
}

function Movie({ movie }) {
  console.log(movie);
  return (
    <NavLink to={"/" + movie.name} style={{ textDecoration: "none" }}>
      <div className="movieImage rounded" style={{ width: "90px" }}>
        <img className="w-100 rounded" src={movie.img} alt="movie" />
        <p className="text-center aboutMovie">{movie.name}</p>
      </div>
    </NavLink>
  );
}

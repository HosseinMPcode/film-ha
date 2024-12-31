import { NavLink } from "react-router-dom";
import "./../styles/Actors.css";

export default function Actors({ actors }) {
  return (
    <div className="ActorsContainer d-flex flex-column align-items-center align-items-sm-start flex-sm-row">
      {actors.map((actor) => (
        <Actor actor={actor} key={actor.name} />
      ))}
    </div>
  );
}

function Actor({ actor }) {
  console.log(actor);
  return (
    <NavLink to={"/" + actor.name}>
      <div className="actorImage">
        <img className="w-100 " src={actor.img} alt="actor" />
        <p className="text-center ">{actor.name}</p>
      </div>
    </NavLink>
  );
}

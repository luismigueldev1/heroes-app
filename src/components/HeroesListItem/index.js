import React from "react";
import { Link } from "react-router-dom";

function HeroesListItem({ hero }) {
  const { id, superhero, alter_ego, first_appearance } = hero;
  return (
    <div className=" col-sm-6 col-md-4  col-lg-3 mt-2">
      <div className="card">
        <img
          src={`./assets/heroes/${id}.jpg`}
          alt={superhero}
          className="card-img"
        />
        <div className="card-body">
          <h5 className="card-title">{superhero}</h5>
          <p className="card-text">{alter_ego}</p>
          <p className="card-text ">
            <small className="text-muted"> {first_appearance}</small>
          </p>

          <Link to={`/hero/${id}`} className="btn btn-primary">
            More...
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroesListItem;

import React, { useMemo } from "react";
import { Redirect, useParams, useHistory } from "react-router-dom";
import { getHeroesById } from "../../selectors/getHeroesById";

function HeroPage() {
  const { heroid } = useParams();
  const history = useHistory();

  const hero = useMemo(() => getHeroesById(heroid), [heroid]);

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
    } else {
      history.goBack();
    }
  };

  if (!hero) return <Redirect to="/" />;
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`../assets/heroes/${heroid}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className="col-8 animate__animated animate__fadeIn">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter Ego: </b>
            {hero.alter_ego}
          </li>

          <li className="list-group-item">
            <b>Publisher: </b>
            {hero.publisher}
          </li>

          <li className="list-group-item">
            <b>First appearance: </b>
            {hero.first_appearance}
          </li>
        </ul>

        <h5 className="mt-2">Characters:</h5>
        <p>{hero.characters}</p>

        <button className="btn btn-warning" onClick={handleReturn}>
          Back
        </button>
      </div>
    </div>
  );
}

export default HeroPage;

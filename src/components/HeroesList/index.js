import React, { useMemo } from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import HeroesListItem from "../HeroesListItem";

export default function HeroesList({ publisher }) {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row animate__animated animate__fadeIn">
      {heroes.map((hero) => (
        <HeroesListItem hero={hero} key={hero.id} />
      ))}
    </div>
  );
}

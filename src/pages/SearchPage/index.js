import React, { useMemo } from "react";
import queryString from "query-string";
import HeroesListItem from "../../components/HeroesListItem";

import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";

export default function SearchPage({ history, location }) {
  const { q = "" } = queryString.parse(location.search);

  const [values, handleInputChange] = useForm({
    search: q,
  });

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`?q=${values.search}`);
  };

  return (
    <div>
      <h1>Search Heroes</h1>
      <hr />

      <div className="row">
        <div className="col-sm-12 col-md-5">
          <form onSubmit={handleSubmit}>
            <label htmlFor="search" className="form-label">
              Find a superhero here:
            </label>
            <input
              type="text"
              name="search"
              className="form-control"
              value={values.search}
              onChange={handleInputChange}
            />
            <div className="d-grid">
              <button type="submit" className="btn mt-1 btn btn-primary">
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="col-sm-12 col-md-7">
          <div className="row">
            {q !== "" && heroesFiltered.length === 0 && (
              <div className="alert alert-warning" role="alert">
                There's not a superhero by the name: {q}
              </div>
            )}

            {q === "" && (
              <div className="alert alert-info" role="alert">
                Search some hero first
              </div>
            )}
            {heroesFiltered.map((hero) => (
              <HeroesListItem hero={hero} key={hero.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import HeroesList from "../../components/HeroesList";

function MarvelPage() {
  return (
    <div>
      <h1>Marvel Heroes</h1>
      <hr />
      <HeroesList publisher="Marvel Comics" />
    </div>
  );
}

export default MarvelPage;

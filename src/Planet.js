import React from "react";
import "./Planet.css";

function Planet({ planet }) {
  let formatPopulation = String(planet.population).replace(
    /(.)(?=(\d{3})+$)/g,
    "$1,"
  );
  return (
    <div className="planet_container">
      <h2>{planet.name}</h2>
      <p>{planet.climate}</p>
      <p>{formatPopulation}</p>
    </div>
  );
}

export default Planet;

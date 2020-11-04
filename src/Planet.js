import React from "react";
import "./Planet.css";

function Planet({ planet }) {
  return (
    <div className="planet_container">
      <h2>{planet.name}</h2>
      <p>{planet.climate}</p>
      <p>{planet.population}</p>
    </div>
  );
}

export default Planet;

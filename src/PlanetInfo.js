import React from "react";
import { useLocation, Link } from "react-router-dom";

function PlanetInfo() {
  const location = useLocation();
  const planet = location.state.planet;
  return (
    <div className="planetInfo_container">
      <Link to="/">Back To Search</Link>
      <h1>{planet.name}</h1>
      <div className="planetInfo">
        <p>
          <span>Rotation Period</span>
          {planet.rotation_period}
        </p>
        <p>
          <span>Diameter</span>
          {planet.diameter}
        </p>
        <p>
          <span>Climate</span>
          {planet.climate}
        </p>
        <p>
          <span>Gravity</span>
          {planet.gravity}
        </p>
        <p>
          <span>Terrain</span>
          {planet.terrain}
        </p>
        <p>
          <span>Population</span>
          {planet.population}
        </p>
      </div>
    </div>
  );
}

export default PlanetInfo;

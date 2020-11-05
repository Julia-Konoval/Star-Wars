import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./PlanetInfo.css";
import axios from "axios";

function PlanetInfo() {
  const location = useLocation();
  const planet = location.state.planet;

  const [planetResidents, setPlanetResidents] = useState([]);

  useEffect(() => {
    console.log(planet.residents);
    let results = [];
    async function fetchResidents() {
      for (let resident of planet.residents) {
        try {
          const response = await axios.get(resident);
          results = results.concat(response.data);
        } catch (error) {
          console.error(error);
        }
      }
      setPlanetResidents(results);
    }
    fetchResidents();
  }, []);

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
      <h2>Famous Residents</h2>
      <div className="resident_container">
        {planetResidents.length === 0 ? (
          <p style={{ color: "red", textAlign: "center" }}>
            No Famous Residents
          </p>
        ) : (
          planetResidents.map((resident, index) => (
            <p className="resident" key={index}>
              {resident.name}
            </p>
          ))
        )}
      </div>
    </div>
  );
}

export default PlanetInfo;

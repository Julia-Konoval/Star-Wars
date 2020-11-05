import React, { useEffect, useState } from "react";
import axios from "axios";
import Planet from "./Planet";
import Spinner from "./Spinner";
import "./Home.css";

function Home() {
  const [planets, setPlanets] = useState([]);
  const planetList = 0;
  useEffect(() => {
    async function fetchData() {
      let i = 1;
      let results = [];
      while (true) {
        try {
          const response = await axios.get(
            `https://swapi.dev/api/planets/?page=${i}`
          );
          console.log(response.data.results);
          results = results.concat(response.data.results);
          i++;
        } catch (error) {
          console.log(error);
          break;
        }
      }

      const filteredPlanets = results.filter(
        (result) => result.name !== "unknown"
      );
      setPlanets(filteredPlanets);
    }

    fetchData();
  }, []);
  return (
    <div className="home_container">
      <h1>Star Wars Planets</h1>
      {planets.length === 0 ? (
        <Spinner />
      ) : (
        <div className="planet_list_container">
          {planets &&
            planets.map((planet, index) => (
              <Planet planet={planet} key={index} />
            ))}
        </div>
      )}
    </div>
  );
}

export default Home;

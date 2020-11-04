import React, { useEffect, useState } from "react";
import axios from "axios";

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
      console.log(results);
      setPlanets(results);
      console.log(planets);
    }

    fetchData();
  }, []);
  return (
    <div>
      {planets.map((planet) => (
        <p>{planet.name}</p>
      ))}
    </div>
  );
}

export default Home;

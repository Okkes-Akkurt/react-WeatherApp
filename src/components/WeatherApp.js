import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const WeatherApp = () => {
   const { temperature, location, condition } = useContext(WeatherContext);

   return (
      <div>
         <h1>Current Weather</h1>
         <h2>{location}</h2>
         <h3>{temperature}°C</h3>
         <p>{condition}</p>
      </div>
   );
};

export default WeatherApp;

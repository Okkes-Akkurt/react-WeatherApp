import axios from "axios";
import React, { useContext, useState } from "react";
import { WeatherContext } from "../context/WeatherContext";

const WeatherForm = () => {
   const { setLocation, setTemperature, setCondition } = useContext(WeatherContext);
   const [city, setCity] = useState("");

   const handleSubmit = async (e) => {
      e.preventDefault();
      const apiKey = process.env.WEATHER_API_KEY;
      await axios(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=7&units=metric&appid=${apiKey}`)
         .then((res) => setLocation(res.name))
         .then((res) => setTemperature(res.main))
         .then((res) => setCondition(res.weather[0].description))
   };

   return (
      <form onSubmit={handleSubmit}>
         <label htmlFor="city">Enter city name: </label>
         <input
            type="text"
            id="city"
            value={city}
            onChange={(event) => setCity(event.target.value)}
         />
         <button type="submit">Get Weather</button>
      </form>
   );
};

export default WeatherForm;

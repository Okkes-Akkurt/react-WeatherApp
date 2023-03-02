import React, { createContext, useState } from "react";

export const WeatherContext = createContext();

const WeatherContextProvider = ({ children }) => {
   const [temperature, setTemperature] = useState("");
   const [location, setLocation] = useState("");
   const [condition, setCondition] = useState("");

   return (
      <WeatherContext.Provider
         value={{ temperature, setTemperature, location, setLocation, condition, setCondition }}>
         {children}
      </WeatherContext.Provider>
   );
};

export default WeatherContextProvider;

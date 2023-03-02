import React from "react";
import WeatherContextProvider from "./context/WeatherContext";
import WeatherApp from "./components/WeatherApp";
import WeatherForm from "./components/WeatherForm";

const App = () => {
  return (
    <WeatherContextProvider>
      <WeatherForm />
      <WeatherApp />
    </WeatherContextProvider>
  );
};

export default App;

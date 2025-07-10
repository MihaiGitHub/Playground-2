import React, { createContext, useState, useEffect } from "react";

export const ForecastContext = createContext();

export const ForecastProvider = ({ children }) => {
  const [coordinates, setCoordinates] = useState("31,80");
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    try {
      fetch(`https://api.weather.gov/gridpoints/TOP/${coordinates}/forecast`)
        .then((response) => response.json())
        .then((response) => setForecast(response.properties.periods));
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <ForecastContext.Provider value={{ coordinates, setCoordinates, forecast }}>
      {children}
    </ForecastContext.Provider>
  );
};

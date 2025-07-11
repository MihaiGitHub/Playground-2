import React, { createContext, useState, useEffect } from "react";
import { API_Forecast } from "../config";

export const ForecastContext = createContext();

export const ForecastProvider = ({ children }) => {
  const [coordinates, setCoordinates] = useState("32,80");
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    try {
      fetch(`${API_Forecast}/${coordinates}/forecast`)
        .then((response) => response.json())
        .then((response) => setForecast(response.properties.periods));
    } catch (e) {
      console.log(e);
    }
  }, [coordinates]);

  return (
    <ForecastContext.Provider value={{ coordinates, setCoordinates, forecast }}>
      {children}
    </ForecastContext.Provider>
  );
};

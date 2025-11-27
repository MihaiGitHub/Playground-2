import React, { createContext, useState, useEffect } from "react";
import { API_Forecast } from "../config";

export const ForecastContext = createContext();

export const ForecastProvider = ({ children }) => {
  const [coordinates, setCoordinates] = useState("32,80");
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const pointsRes = await fetch(
          `https://api.weather.gov/points/${coordinates}`
        );
        const pointsData = await pointsRes.json();

        // SAFEST → the API guarantees this URL is valid
        const forecastUrl = pointsData.properties.forecast;

        if (!forecastUrl) {
          console.error("No forecast URL available for this point.");
          return;
        }

        const forecastRes = await fetch(forecastUrl);
        const forecastData = await forecastRes.json();

        setForecast(forecastData.properties.periods);
      } catch (e) {
        console.error("Error fetching forecast:", e);
      }
    };

    fetchForecast();
  }, [coordinates]);

  return (
    <ForecastContext.Provider value={{ coordinates, setCoordinates, forecast }}>
      {children}
    </ForecastContext.Provider>
  );
};

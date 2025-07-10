import React, { useContext } from "react";
import { ForecastContext } from "../contexts/forecast.context";

const Forecast = () => {
  const { coordinates, setCoordinates, forecast } = useContext(ForecastContext);

  return (
    <div>
      {forecast.map((item, key) => {
        return (
          <div style={style.row} key={key}>
            <p style={style.cell}>{item.name}</p>
            <p style={style.cell}>{item.shortForecast}</p>
            <p style={style.cell}>{item.temperature}</p>
          </div>
        );
      })}
    </div>
  );
};

const style = {
  row: {
    display: "flex",
  },
  cell: {
    flex: 1,
  },
};

export default Forecast;

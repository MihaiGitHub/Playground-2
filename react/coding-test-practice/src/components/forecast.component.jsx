import React, { useContext, useState } from "react";
import { ForecastContext } from "../contexts/forecast.context";
import SearchBox from "./search-box.component";
import Button from "./button.component";

const Forecast = () => {
  const [value, setValue] = useState("");
  const { setCoordinates, forecast } = useContext(ForecastContext);

  const handleSubmit = () => {
    setCoordinates(value);
  };

  return (
    <div>
      <div style={style.row}>
        <SearchBox setValue={setValue} value={value} />
        <Button handleSubmit={handleSubmit} />
      </div>
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

import React, { useState, useEffect } from "react";
import Forecast from "../components/forecast.component";

const Other = () => {
  const [name, setName] = useState("Benson");

  useEffect(() => {
    console.log("component mounted");

    return () => {
      console.log("component unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("component updated");
  }, [name]);

  const handleClick = () => {
    setName("Jon");
  };

  return (
    <div>
      <h1>Other</h1>
      <div>
        <h3>Details:</h3> {name}
        <button onClick={handleClick}>Update State</button>
      </div>
      <div>
        <h3>Forecast</h3>
        <Forecast />
      </div>
    </div>
  );
};

export default Other;

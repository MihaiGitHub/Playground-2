import React, { useState, useEffect } from "react";
import Forecast from "../components/forecast.component";

const Other = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    address: {
      city: "New York",
      zip: "10001",
    },
  });

  useEffect(() => {
    console.log("component mounted");

    return () => {
      console.log("component unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("component updated");
  }, [user]);

  const handleClick = () => {
    setUser((prevUser) => ({
      ...prevUser,
      address: {
        ...prevUser.address,
        city: "Kansas City",
      },
    }));
  };

  return (
    <div>
      <h1>Other</h1>
      <div>
        <h3>Change State</h3>
        <p>{JSON.stringify(user)}</p>
        <p>
          <button onClick={handleClick}>Update State</button>
        </p>
      </div>
      <div>
        <h3>Search Forecast</h3>
        <Forecast />
      </div>
    </div>
  );
};

export default Other;

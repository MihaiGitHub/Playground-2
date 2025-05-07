import React, { useState, useEffect } from "react";

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
        Details: {name}
        <button onClick={handleClick}>Update State</button>
      </div>
    </div>
  );
};

export default Other;

import React, { Fragment, useState, useEffect } from "react";

const SaveData = () => {
  const [myObject, setMyObject] = useState({
    a: "The first letter of the alphabet",
    b: "A string as the second letter",
    5: 69,
    arr: [1, 2, 3, 4, 5],
  });

  const [myObject2, setMyObject2] = useState({
    a: "The first letter of the alphabet",
    b: "A string as the second letter",
    5: 69,
    arr: [1, 2, 3, 4, 5],
    obj: {
      fname: "Elon",
      lname: "Musk",
    },
  });

  // display key and values of object
  for (const [key, value] of Object.entries(myObject2)) {
    console.log(key, value);
  }

  // update values of an object
  let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
  };

  let doublePrices = Object.fromEntries(
    // convert to array, map, and then fromEntries gives back the object
    Object.entries(prices).map(([key, value]) => [key, value * 2])
  );

  console.log(doublePrices);

  // sum the properties
  const sumSalaries = (salaries) => {
    let sum = 0;
    for (let salary of Object.values(salaries)) {
      sum += salary;
    }

    return sum; // 650
  };

  let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
  };

  console.log(sumSalaries(salaries)); // 650

  // count the properties
  console.log(Object.keys(salaries).length); // 3

  return (
    <Fragment>
      <h1 className="mt-4">Objects</h1>

      <ul>
        {Object.keys(myObject).map((key) => (
          <li key={key}>Value: {myObject[key]}</li>
        ))}
      </ul>

      <ul>
        {Object.values(myObject).map((value) => (
          <li key={value}>Value: {value}</li>
        ))}
      </ul>

      <ul>
        {Object.entries(myObject).map(([key, value]) => (
          <li key={key}>Value: {value}</li>
        ))}
      </ul>
    </Fragment>
  );
};

export default SaveData;

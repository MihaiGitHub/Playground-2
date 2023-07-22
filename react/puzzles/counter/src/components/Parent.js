import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [counter, setCounter] = useState(0);

  const resetCounter = () => {
    setCounter(0);
  };

  const incCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <Child counter={counter} incCounter={incCounter} />
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
};

export default Parent;

import { useState } from "react";

const Calculator = () => {
  const [values, setValues] = useState({
    name: "",
  });

  const { name } = values;

  const formEventHandler = (name) => (event) => {
    console.log(name, event.target.value);

    setValues({ ...values, name: event.target.value });
  };

  const form = () => {
    return (
      <form>
        <input type="text" value={name} onChange={formEventHandler("name")} />
        {/* <input type="text" value={} onChange={} />

            <input type="text" value={} onChange={} /> */}
      </form>
    );
  };
  return <div>Name{form()}</div>;
};

export default Calculator;

import React from "react";

const Button = ({ handleSubmit }) => {
  return (
    <div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Button;

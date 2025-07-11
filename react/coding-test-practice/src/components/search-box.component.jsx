import React, { useState } from "react";

const SearchBox = ({ setValue, value }) => {
  return (
    <div>
      <input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Search Forecast"
        value={value}
      />
    </div>
  );
};

export default SearchBox;

import React, { useState, createContext } from "react";

export const MovieContext = createContext();

// if need to use info from MovieProvider, import MovieContext
export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      id: 234,
      name: "Harry Potter",
      price: "10",
    },
    {
      id: 254,
      name: "Game of Thrones",
      price: "15",
    },
    {
      id: 204,
      name: "Inception",
      price: "190",
    },
  ]);

  // props.children will render anything wrapped inside <MovieContext.Provider>
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};

import React from "react";
import { MovieProvider } from "./MovieContext";
import Nav from "./Nav";
import Movies from "./Movies";

const Main = () => {
  return (
    <MovieProvider>
      <Nav />
      <Movies />
    </MovieProvider>
  );
};

export default Main;

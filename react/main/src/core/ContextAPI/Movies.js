import React, { Fragment, useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

const Movies = () => {
  const [values, setValues] = useState({
    id: Math.floor(Math.random() * 1000),
    name: "",
    price: "",
  });

  const [movies, setMovies] = useContext(MovieContext);

  const { name, price } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const movieList = () => (
    <table className="table table-striped mt-5">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie, index) => (
          <tr key={index}>
            <td>{movie.id}</td>
            <td>{movie.name}</td>
            <td>{movie.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    // access to previous movies
    setMovies((prevMovies) => {
      return [...prevMovies, values];
    });
  };

  const addMovie = () => (
    <form>
      <div className="row">
        <div className="col">
          <input
            onChange={handleChange("name")}
            value={name}
            type="text"
            className="form-control"
            placeholder="Name"
          />
        </div>
        <div className="col">
          <input
            onChange={handleChange("price")}
            value={price}
            type="text"
            className="form-control"
            placeholder="Price"
          />
        </div>
        <div className="col">
          <button onClick={handleSubmit} className="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </form>
  );

  return (
    <Fragment>
      {addMovie()}
      {movieList()}
    </Fragment>
  );
};

export default Movies;

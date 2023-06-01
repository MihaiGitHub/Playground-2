import React from "react";
import { Link } from "react-router-dom";

export const Menu = () => (
  <div className="bg-light border-right" id="sidebar-wrapper">
    <div className="list-group list-group-flush">
      <Link className="list-group-item list-group-item-action bg-light" to="/">
        Strings
      </Link>
      <Link
        className="list-group-item list-group-item-action bg-light"
        to="/arrays"
      >
        Arrays
      </Link>
      <Link
        className="list-group-item list-group-item-action bg-light"
        to="/objects"
      >
        Objects
      </Link>
    </div>
  </div>
);

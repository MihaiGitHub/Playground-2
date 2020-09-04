import React from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => (
    <div className="bg-light border-right" id="sidebar-wrapper">
      <div className="list-group list-group-flush">
        <Link className="list-group-item list-group-item-action bg-light" to="/">Search List</Link>
        <Link className="list-group-item list-group-item-action bg-light" to="/savedata">Save Data</Link>
        <Link className="list-group-item list-group-item-action bg-light" to="/refs">Refs</Link>
        <Link className="list-group-item list-group-item-action bg-light" to="/localstorage">Local Storage</Link>
      </div>
    </div>
);
import React from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => (
    <div className="bg-light border-right" id="sidebar-wrapper">
      <div className="list-group list-group-flush">
        <Link className="list-group-item list-group-item-action bg-light" to="/">Search Posts</Link>
        <Link className="list-group-item list-group-item-action bg-light" to="/savepost">Save Post</Link>
        <Link className="list-group-item list-group-item-action bg-light" to="/refs">Refs</Link>
      </div>
    </div>
);
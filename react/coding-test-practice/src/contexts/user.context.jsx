import React, { createContext, useEffect, useState } from "react";
import { API } from "../config";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API}/users`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setLoading(false);
      });
  }, []);

  return (
    <UserContext.Provider
      value={{ users, filteredUsers, setFilteredUsers, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};

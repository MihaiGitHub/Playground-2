import React, { createContext, useEffect, useState } from "react";
import { API } from "../config";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`${API}/users`);
        const data = await res.json();

        setUsers(data);
        setFilteredUsers(data);
      } catch (err) {
        console.error("Error fetching users:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <UserContext.Provider
      value={{ users, filteredUsers, setFilteredUsers, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};

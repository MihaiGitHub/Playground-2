import React, { useContext } from "react";
import { UserContext } from "../contexts/user.context";

const UserList = () => {
  const { users, loading } = useContext(UserContext);

  if (loading) return <p>Loading users...</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <strong>{user.name}</strong> ({user.email})
        </li>
      ))}
    </ul>
  );
};

export default UserList;

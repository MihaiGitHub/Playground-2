import React, { useContext } from "react";
import { UserContext } from "../contexts/user.context";

const UserList = () => {
  const { users, loading } = useContext(UserContext);

  if (loading) return <p>Loading users...</p>;

  console.log("users ", users);

  return (
    <div style={styles.container}>
      {users.map((user) => (
        <div key={user.id} style={styles.row}>
          <h3 style={styles.cell}>{user.name}</h3>
          <p style={styles.cell}>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  row: {
    display: "flex",
  },
  cell: {
    flex: 1,
  },
};

export default UserList;

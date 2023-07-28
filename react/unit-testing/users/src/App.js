import { useState } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([]);

  const onUserAdd = (user) => {
    setUsers([...users, user]);
  };

  const loadUsersAPI = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers([...users, ...json]));
  };

  return (
    <div>
      <UserForm onUserAdd={onUserAdd} loadUsersAPI={loadUsersAPI} />
      <hr />
      <UserList users={users} />
    </div>
  );
}

export default App;

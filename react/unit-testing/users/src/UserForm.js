import { useState } from "react";

function UserForm({ onUserAdd, loadUsersAPI }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  //const [users, setUsers] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    onUserAdd({ name, email });

    setEmail("");
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "0 auto", width: "50%" }}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          type="text"
          className="form-control"
          placeholder="Enter name"
        />
      </div>
      <div className="form-group" style={{ marginTop: 10 }}>
        <label htmlFor="email">Email address</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        style={{ marginTop: 15 }}
      >
        Add User From Form
      </button>
      <button
        type="button"
        className="btn btn-primary"
        style={{ marginLeft: 20, marginTop: 15 }}
        onClick={() => loadUsersAPI()}
      >
        Load Users From API
      </button>
    </form>
  );
}

export default UserForm;

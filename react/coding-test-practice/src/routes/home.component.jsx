import React from "react";
import UserList from "../components/user-list.component";
import ThemeChangeApp from "../components/theme.component";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ThemeChangeApp />
      <UserList />
    </div>
  );
};

export default Home;

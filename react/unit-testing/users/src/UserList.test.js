import { render, screen } from "@testing-library/react";
import UserList from "./UserList";

test("render on row per user", () => {
  const users = [
    { name: "jane", email: "jane@jane.com" },
    { name: "sam", email: "sam@sam.com" },
  ];

  // render the component with props
  render(<UserList users={users} />);
});

test("render the email and name of each user", () => {});

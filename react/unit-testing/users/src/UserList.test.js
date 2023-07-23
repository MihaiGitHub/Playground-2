import { render, screen } from "@testing-library/react";
import UserList from "./UserList";

test("render one row per user", () => {
  const users = [
    { name: "jane", email: "jane@jane.com" },
    { name: "sam", email: "sam@sam.com" },
  ];

  // render the component with props and destructure the container (the div that React Testing Library renders automatically as a wrapper to entire component)
  const { container } = render(<UserList users={users} />);

  // testing debugger to view HTML rendered and methods required for testing
  screen.logTestingPlaygroundURL();

  // find all the rows in the table within tbody
  // disable warning not to use container methods
  // eslint-disable-next-line
  const rows = container.querySelectorAll("tbody tr");

  // Assertion - make sure the correct number of rows are in the table
  expect(rows).toHaveLength(2);
});

test("render the email and name of each user", () => {});

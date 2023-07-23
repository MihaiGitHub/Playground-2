import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

// test the whole app
test("it can receive a new user and show it on a list", async () => {
  render(<App />);

  // find the two inputs by id
  const nameInput = screen.getByRole("textbox", {
    name: /name/i,
  });
  const emailInput = screen.getByRole("textbox", {
    name: /email/i,
  });

  // find button
  const button = screen.getByRole("button");

  // simulate typing in a name
  await user.click(nameInput);
  await user.keyboard("jane");

  // simulate typing in an email
  await user.click(emailInput);
  await user.keyboard("jane@jane.com");

  // simulate clicking the button
  await user.click(button);

  // print rendered output on screen
  screen.debug();

  // check if name and email are displayed in table
  const name = screen.getByRole("cell", { name: "jane" });
  const email = screen.getByRole("cell", { name: "jane@jane.com" });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});

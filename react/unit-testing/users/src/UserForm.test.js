import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

// test function provided by the test runner - Jest
test("it shows two inputs and a button", () => {
  // render the component
  render(<UserForm />);

  // make sure it renders textbox and button
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // Assertion - make sure component is doing what is intended
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

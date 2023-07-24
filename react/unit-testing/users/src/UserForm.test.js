import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

// test function provided by the test runner - Jest
test("it shows two inputs and a button", () => {
  // render the component
  render(<UserForm />);

  // make sure it renders textbox and button
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button"); // use getByRole when expecting only 1 element

  // Assertion - make sure component is doing what is intended
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("it calls onUserAdd when the form is submitted", async () => {
  // create Jest mock function to pass as props to UserForm component
  const mock = jest.fn();

  // render the component with the props it requires
  render(<UserForm onUserAdd={mock} />);

  // find the two inputs by id
  const nameInput = screen.getByRole("textbox", {
    name: /name/i,
  });
  const emailInput = screen.getByRole("textbox", {
    name: /email/i,
  });

  // simulate typing in a name
  await user.click(nameInput);
  await user.keyboard("jane");

  // simulate typing in an email
  await user.click(emailInput);
  await user.keyboard("jane@jane.com");

  // find the button
  const button = screen.getByRole("button");

  // simulate clicking the button
  await user.click(button);

  // Assertion - make sure 'onUserAdd' gets called
  expect(mock).toHaveBeenCalled();

  // Assertion - make sure 'onUserAdd' gets called with email/name
  expect(mock).toHaveBeenCalledWith({ name: "jane", email: "jane@jane.com" });
});

test("it empties the two inputs when form is submitted", async () => {
  // don't care about the onUserAdd add so just pass an empty function
  render(<UserForm onUserAdd={() => {}} />);

  // find inputs
  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });

  // find the button
  const button = screen.getByRole("button");

  // simulate typing in a name
  await user.click(nameInput);
  await user.keyboard("jane");

  // simulate typing in an email
  await user.click(emailInput);
  await user.keyboard("jane@jane.com");

  // simulate clicking the button
  await user.click(button);

  // Asertions - make sure inputs are empty afterwards
  expect(nameInput).toHaveValue("");
  expect(emailInput).toHaveValue("");
});

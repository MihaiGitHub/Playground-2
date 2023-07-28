import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

describe("test the whole app", () => {
  test("it can receive a new user and show it on a list", async () => {
    render(<App />);

    // find the two inputs by id
    const nameInput = screen.getByRole("textbox", {
      name: /name/i,
    });
    const emailInput = screen.getByRole("textbox", {
      name: /email/i,
    });

    // find button that adds user from form
    const button = screen.getByRole("button", {
      name: /Add User From Form/i,
    });

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

  test("it can add 10 users from API", async () => {
    render(<App />);

    // find button that adds users from API
    const loadButton = screen.getByRole("button", {
      name: /Load Users From API/i,
    });

    // get current rows in table
    const rows = screen.getAllByRole("row").length;

    // simulate clicking the button
    await user.click(loadButton);

    // wait for the page to load then check for total rows in the DOM
    // The default timeout is 1000ms
    // waitFor - automatically calls 'act' for you; The act function defines a window in time where state updates can (and should) occur
    await waitFor(async () => {
      const finalRows = await screen.findAllByRole("row");

      // print rendered output on screen
      screen.debug();

      // Assertion - check the sum of all rows expected to be in the DOM
      expect(finalRows).toHaveLength(rows + 10);
    });
  });
});

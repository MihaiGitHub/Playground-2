import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

// built in test function
test("shows 6 products by default", async () => {
  // first render the app component
  render(<App />);

  // search for 6 <h3> elements in the DOM (6 products being displayed)
  const headings = await screen.findAllByRole("heading");

  // make sure the <h3> element count is 6
  expect(headings).toHaveLength(6);
});

test("clicking on the button loads 6 more products", async () => {
  // first render the app component
  render(<App />);

  // find the button in the DOM
  const button = await screen.findByRole("button", {
    name: /load more/i,
  });

  // simulate click event on button
  await user.click(button);

  // wait for the page to load then check for 12 <h3> elements in the DOM
  // The default timeout is 1000ms
  // waitFor - automatically calls 'act' for you; The act function defines a window in time where state updates can (and should) occur
  await waitFor(async () => {
    const headings = await screen.findAllByRole("heading");
    expect(headings).toHaveLength(12);
  });
});

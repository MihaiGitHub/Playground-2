import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SaveData from "./core/SaveData";

test("SaveData component renders the correct content", () => {
  const { getByText } = render(<SaveData />);

  expect(getByText("Save Data")).not.toBeNull();
  expect(getByText("ID")).not.toBeNull();
  expect(getByText("Title")).not.toBeNull();
  expect(getByText("Body")).not.toBeNull();
  expect(getByText("Save")).not.toBeNull();
});

test("Allows users to save items to their list", async () => {
  const { getByText, getByPlaceholderText, findByText } = render(<SaveData />);

  const inputTitle = getByPlaceholderText("Title");
  const inputBody = getByPlaceholderText("Body");

  fireEvent.change(inputTitle, { target: { value: "Test case title" } });
  fireEvent.change(inputBody, { target: { value: "Test case body" } });

  fireEvent.click(getByText("Save"));

  // wait for appearance and return the element
  const titleSaved = await findByText("Test case title");
  const bodySaved = await findByText("Test case body");
});

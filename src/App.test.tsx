import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders components", () => {
  render(<App />);
  const linkElement = screen.getAllByText(/sign/i);
  expect(linkElement.length).not.toBe(0);
});

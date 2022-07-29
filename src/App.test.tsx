import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders components", () => {
  render(<App />);
  const linkElement = screen.getByText(/Working with POST request/i);
  expect(linkElement).toBeInTheDocument();
});

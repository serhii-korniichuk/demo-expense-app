import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { HashRouter } from "react-router-dom";

test("renders components", () => {
  render(
    <HashRouter>
      <App />
    </HashRouter>);
  const linkElement = screen.getAllByText(/sign/i);
  expect(linkElement.length).not.toBe(0);
});

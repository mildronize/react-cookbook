import React from "react";
import { render } from "@testing-library/react";

import UsersAddForm from "./UsersAddForm";
import { renderWithRedux } from "../../../utils/test";

test("renders Users Add Form Page", () => {
  const { getByText } = renderWithRedux(<UsersAddForm /> );
  const linkElement = getByText(/Add Student Entry/i);
  expect(linkElement).toBeInTheDocument();
});

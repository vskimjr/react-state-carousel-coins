import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

test("renders without crashing", function () {
  render(<Card />);
});

test("matches snapshot", function () {
  const { container } = render(<Card />);
  expect(container).toMatchSnapshot();
});
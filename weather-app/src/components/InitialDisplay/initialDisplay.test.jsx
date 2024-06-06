import { render, screen } from "@testing-library/react";
import InitialDisplay from "./InitialDisplay";

test("initial display render correctly", () => {
  render(<InitialDisplay />);
  const initialText = screen.getByRole("paragraph");
  expect(initialText).toHaveTextContent(
    "Search your nearest city and we will return the colour of the day"
  );
});

import { render, screen } from "@testing-library/react";
import Header from "./Header.jsx";

test("render correctly", () => {
  render(<Header />);
  const heading = screen.getByRole("heading", { level: 1 });
  expect(heading).toHaveTextContent("Stitch the Weather");
});

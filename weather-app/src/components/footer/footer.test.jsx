import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("footer render correctly", () => {
  const palette = [
    {
      id: 1,
      temp: 41,
      hex: "#541528",
      color: "red",
      thread: 498,
      yarn: "K841",
    },
    {
      id: 2,
      temp: 38,
      hex: "#901035",
      color: "red",
      thread: 3685,
      yarn: "K700",
    },
    {
      id: 3,
      temp: 35,
      hex: "#a42244",
      color: "red",
      thread: 321,
      yarn: "K617",
    },
  ];

  render(<Footer palette={palette} />);
  const header = screen.getByRole("heading", { level: 4 });
  expect(header).toHaveTextContent("List of Colours");
});

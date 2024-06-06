import { render, screen } from "@testing-library/react";
import Search from "./Search";

test("search renders correctly", () => {
  const location = "Hull";
  const searchCity = "Hull";
  function handleClick() {}

  render(
    <Search
      location={location}
      searchCity={searchCity}
      handleClick={handleClick}
    />
  );
  const inputField = screen.getByRole("searchbox");
  expect(inputField).toBeInTheDocument();
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
  const buttonImg = screen.getByRole("img");
  expect(buttonImg).toBeInTheDocument();
});

import { render, screen } from "@testing-library/react";
import Weather from "./Weather";

test("Weather renders correctly", () => {
  const city = "Hull";
  const minTemp = 12;
  const maxTemp = 18;
  const yesterdayTemp = 15;
  const weatherDescription = "scattered clouds";
  const weatherIcon = "01d";
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
  // isToggled

  render(
    <Weather
      city={city}
      minTemp={minTemp}
      maxTemp={maxTemp}
      yesterdayTemp={yesterdayTemp}
      weatherDescription={weatherDescription}
      weatherIcon={weatherIcon}
      palette={palette}
    />
  );
  const header = screen.getByRole("heading", { level: 1 });
  expect(header).toHaveTextContent("Today in Hull");
  const icon = screen.getByRole("img");
  expect(icon).toBeInTheDocument();
  //   const weatherDesc = screen.getAllByRole("paragraph")[0];
  //   expect(weatherDesc).toHaveTextContent("scattered clouds");
  const weatherDesc = screen.getByLabelText("weather-description");
  expect(weatherDesc).toHaveTextContent("scattered clouds");
});

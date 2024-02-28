import DisplayBox from "./DisplayBox";
import Header from "./Header";
import Search from "./Search";
import { useState } from "react";

const location = async (city) => {
  console.log(import.meta.env);
  const locationResponse = await fetch(
    `
    https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
      import.meta.env.VITE_WEATHER_API_KEY
    }&units=metric
    `
  );
  const locationData = await locationResponse.json();
  console.log(locationData);

  // const lat = locationData[0].lat;
  const temp_max = locationData.main.temp_max;
  const temp_min = locationData.main.temp_min;

  // const lon = locationData.coord.lon;
  console.log(temp_max, temp_min);
  return { temp_max, temp_min };
};

export default function Main() {
  const [searchInput, setSearchInput] = useState("London");

  const searchCity = (e) => {
    setSearchInput(e.target.value);
  };

  const handleClick = async () => {
    const { temp_max, temp_min } = await location(searchInput);
    console.log(temp_max, temp_min);
  };

  return (
    <>
      <Header />
      <Search
        location={location}
        searchCity={searchCity}
        handleClick={handleClick}
      />
      <DisplayBox city={searchInput} />
    </>
  );
}

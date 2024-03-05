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

const historical = async (city) => {
  const historicalResponse = await fetch(
    `https://history.openweathermap.org/data/2.5/history/city?lat={lat}&lon={lon}&type=hour&start={start}&end={end}&appid=${
      import.meta.env.VITE_WEATHER_API_KEY
    }&units=metric`
  );
};

export default function Main() {
  const [searchInput, setSearchInput] = useState("");
  const [maxTemp, setMaxTemp] = useState("");
  const [minTemp, setMinTemp] = useState("");

  const searchCity = (e) => {
    setSearchInput(e.target.value);
  };

  const handleClick = async () => {
    const { temp_max, temp_min } = await location(searchInput);
    console.log(temp_max, temp_min);
    setMaxTemp(temp_max);
    setMinTemp(temp_min);
  };

  return (
    <>
      <Header />
      <Search
        location={location}
        searchCity={searchCity}
        handleClick={handleClick}
      />
      <DisplayBox city={searchInput} maxTemp={maxTemp} minTemp={minTemp} />
    </>
  );
}

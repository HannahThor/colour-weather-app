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

  const lat = locationData.coord.lat;
  const lon = locationData.coord.lon;
  console.log(lat, lon);

  const temp_max = locationData.main.temp_max;
  const temp_min = locationData.main.temp_min;
  console.log(temp_max, temp_min);

  const weatherDesc = locationData.weather[0].description;
  const weatherDescIcon = locationData.weather[0].icon;
  console.log(weatherDesc, weatherDescIcon);

  return { temp_max, temp_min, lat, lon, weatherDesc, weatherDescIcon };
};

// open meteo for historical weather data
const historical = async (lat, lon) => {
  const historicalResponse = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max&past_days=1&forecast_days=1`
  );
  const historicalData = await historicalResponse.json();
  console.log(historicalData);
  return historicalData;
};

export default function Main({ palette }) {
  const [searchInput, setSearchInput] = useState("");
  const [maxTemp, setMaxTemp] = useState("");
  const [minTemp, setMinTemp] = useState("");
  const [yesterdayTemp, setYesterdayTemp] = useState("");
  const [weatherDescription, setWeatherDescription] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("");
  const [city, setCity] = useState(null);

  const searchCity = (e) => {
    setSearchInput(e.target.value);
  };

  const handleClick = async () => {
    const { temp_max, temp_min, lat, lon, weatherDesc, weatherDescIcon } =
      await location(searchInput);
    console.log(temp_max, temp_min);

    const historicalInfo = await historical(lat, lon);
    console.log(historicalInfo);
    const pastMaxTemp = historicalInfo.daily.temperature_2m_max[0];
    console.log(pastMaxTemp);

    const cityCorrectCase =
      searchInput.charAt(0).toUpperCase() + searchInput.slice(1).toLowerCase();
    console.log("city formated");

    setMaxTemp(temp_max);
    setMinTemp(temp_min);
    setYesterdayTemp(pastMaxTemp);
    setWeatherDescription(weatherDesc);
    setWeatherIcon(weatherDescIcon);
    setCity(cityCorrectCase);
  };

  return (
    <>
      <Header />
      <Search
        location={location}
        searchCity={searchCity}
        handleClick={handleClick}
      />
      <DisplayBox
        city={city}
        maxTemp={maxTemp}
        minTemp={minTemp}
        yesterdayTemp={yesterdayTemp}
        weatherDescription={weatherDescription}
        weatherIcon={weatherIcon}
        palette={palette}
      />
    </>
  );
}

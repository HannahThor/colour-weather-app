import React from "react";

export default function Search() {
  const handleClick = async () => {
    // const response = await fetch(
    //   "https://api.weatherapi.com/v1/forecast.json?q=birmingham&days=1",
    //   {
    //     headers: {
    //       key: import.meta.env.WEATHER_API_KEY,
    //     },
    //   }
    // );
    // const data = await response.json();
    // console.log(data);

    const locationResponse = await fetch(
      "http://api.openweathermap.org/geo/1.0/direct?q=london&appid=980d4eb7360007329a040bec58ab7eb3"
    );
    const locationData = await locationResponse.json();
    console.log(locationData);

    // const lat = locationData[0].lat;
    const { lat, lon } = locationData[0];
    console.log(lat, lon);

    // const response = await fetch(
    //   "https://api.weatherapi.com/v1/forecast.json?q=birmingham&days=1",
    //   {
    //     headers: {
    //       key: import.meta.env.WEATHER_API_KEY,
    //     },
    //   }
    // );
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min`
    );

    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <input type="search"></input>
      <button onClick={handleClick}>Search</button>
    </>
  );
}

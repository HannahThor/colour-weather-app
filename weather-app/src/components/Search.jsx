import React from "react";
import "dotenv/config";

export default function Search() {
  const handleClick = async () => {
    const response = await fetch(
      "https://api.weatherapi.com/v1/forecast.json?q=birmingham&days=1",
      {
        headers: {
          key: process.env.WEATHER_API_KEY,
        },
      }
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

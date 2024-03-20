import React from "react";
import { useState, useEffect } from "react";

export default function Weather({
  city,
  minTemp,
  maxTemp,
  yesterdayTemp,
  weatherDescription,
  weatherIcon,
  palette,
}) {
  const [yesterdayHex, setYesterdayHex] = useState("green");

  useEffect(() => {
    for (let i = 0; i < palette.length; i++) {
      if (yesterdayTemp >= palette[i].temp) {
        setYesterdayHex(palette[i].hex);
        console.log(
          "yesterday temp:",
          yesterdayTemp,
          "hex colour:",
          palette[i].hex
        );
        return;
      }
    }
  }, [yesterdayTemp]);

  return (
    <>
      <article className="today">
        <h1>Today in {city}</h1>
        <img
          className="weather-icon"
          src={`/images/weather/${weatherIcon}.png`}
        />
        <p>{weatherDescription}</p>
        <div className="tempToday">
          <div>
            <p>{maxTemp} °C</p>
            <p>Max temp</p>
          </div>
          <div>
            <p>{minTemp} °C</p>
            <p>Min temp</p>
          </div>
        </div>
      </article>
      <section className="yesterday">
        <h3>Colour of the day</h3>
        <div
          style={{ backgroundColor: `${yesterdayHex}` }}
          className="colour-circle"
        >
          {yesterdayTemp}
        </div>
      </section>
    </>
  );
}

import React from "react";
import { useState, useEffect } from "react";
import Yesterday from "../yesterday/yesterday";

export default function Weather({
  city,
  minTemp,
  maxTemp,
  yesterdayTemp,
  weatherDescription,
  weatherIcon,
  palette,
  isToggled,
}) {
  const [yesterdayHex, setYesterdayHex] = useState("");
  const [yesterdayThread, setYesterdayThread] = useState("");
  const [yesterdayYarn, setYesterdayYarn] = useState("");

  useEffect(() => {
    for (let i = 0; i < palette.length; i++) {
      if (yesterdayTemp >= palette[i].temp) {
        setYesterdayHex(palette[i].hex);
        setYesterdayThread(palette[i].thread);
        setYesterdayYarn(palette[i].yarn);
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
        <h1 className="today-in">Today in {city}</h1>
        <img
          className="weather-icon"
          src={`/images/weather/${weatherIcon}.png`}
        />
        <p aria-label="weather-description">{weatherDescription}</p>
        <div className="tempToday">
          <div>
            <p aria-label="high-temp">H: {maxTemp}°C</p>
          </div>
          <div>
            <p aria-label="low-temp">L: {minTemp}°C</p>
          </div>
        </div>
        <Yesterday
          yesterdayTemp={yesterdayTemp}
          yesterdayHex={yesterdayHex}
          yesterdayThread={yesterdayThread}
          yesterdayYarn={yesterdayYarn}
        />
      </article>
    </>
  );
}

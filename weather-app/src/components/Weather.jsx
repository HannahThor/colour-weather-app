import React from "react";

export default function Weather({
  city,
  minTemp,
  maxTemp,
  yesterdayTemp,
  weatherDescription,
  weatherIcon,
}) {
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
            <p>{maxTemp}</p>
            <p>Max temp</p>
          </div>
          <div>
            <p>{minTemp}</p>
            <p>Min temp</p>
          </div>
        </div>
      </article>
      <section className="yesterday">
        <h3>Colour of the day</h3>
        <div className="colour-circle">{yesterdayTemp}</div>
      </section>
    </>
  );
}

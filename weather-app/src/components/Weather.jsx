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
        <p>{weatherIcon} </p>
        <p>{weatherDescription}</p>
        <div>
          <div>{maxTemp}</div>
          <div>Max temp</div>
        </div>
        <div>
          <div>{minTemp}</div>
          <div>Min temp</div>
        </div>
      </article>
      <section className="yesterday">
        <h3>Colour of the day</h3>
        <div className="colour-circle">{yesterdayTemp}</div>
      </section>
    </>
  );
}

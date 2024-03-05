import React from "react";

export default function Weather({ city, minTemp, maxTemp }) {
  return (
    <>
      <article className="today">
        <h1>Today in {city}</h1>
        <img src="/images/clouds.png" />
        <p>Current weather description</p>
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
        <div className="colour-circle">7</div>
      </section>
    </>
  );
}

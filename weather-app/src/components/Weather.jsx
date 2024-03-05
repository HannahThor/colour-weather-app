import React from "react";

export default function Weather({ city, minTemp, maxTemp }) {
  return (
    <>
      <article>
        <h1>Today in {city}</h1>
        <img src="../public/images/clouds.png" />
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
      <section>
        <div>Colour of the day</div>
        <div className="colour-circle">7</div>
      </section>
    </>
  );
}

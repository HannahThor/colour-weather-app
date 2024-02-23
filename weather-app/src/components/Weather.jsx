import React from "react";

export default function Weather() {
  return (
    <>
      <article>
        <h1>Today in....</h1>
        <img src="../public/images/clouds.png" />
        <p>Current weather description</p>
        <p>
          <div>7</div>
          <div>Max temp</div>
        </p>
        <p>
          <div>2</div>
          <div>Min temp</div>
        </p>
      </article>
      <section>
        <div>Colour of the day</div>
        <div className="colour-circle">7</div>
      </section>
    </>
  );
}

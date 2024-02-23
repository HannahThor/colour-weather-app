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
          <div>High temp</div>
        </p>
        <p>
          <div>2</div>
          <div>Low temp</div>
        </p>
      </article>
      <section>
        <div>Colour of the day</div>
        <div>Low temp</div>
      </section>
    </>
  );
}

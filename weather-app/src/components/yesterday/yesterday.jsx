import React from "react";
import "./yesterday.css";

export default function Yesterday({
  yesterdayTemp,
  yesterdayHex,
  yesterdayThread,
  yesterdayYarn,
}) {
  return (
    <section className="yesterday-card">
      <div
        style={{ backgroundColor: `${yesterdayHex}` }}
        className="colour-circle"
      >
        {yesterdayTemp}°C
      </div>
      <h3>Colour of the day</h3>
      <p>
        {yesterdayThread} {yesterdayYarn}
      </p>
    </section>
  );
}

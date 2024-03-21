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
      ></div>
      <div>
        <div className="card-name">Colour of the day</div>
        <p className="card-color">Yesterdays Temp: {yesterdayTemp}°C</p>
        <p className="card-color">Thread: {yesterdayThread}</p>
        <p className="card-color">Yarn: {yesterdayYarn}</p>
      </div>
    </section>
  );
}

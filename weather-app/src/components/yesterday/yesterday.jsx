import React from "react";
import "./yesterday.css";
import { Link } from "react";

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
        <p className="card-color">
          <a href="https://www.dmc.com/GB/en-GB/products/other-embroidery-thread">
            Thread:{" "}
          </a>
          {yesterdayThread}
        </p>
        <p className="card-color">
          <a href="https://www.dmc.com/GB/en-GB/products/knitty-yarn/knitty-4">
            Yarn:{" "}
          </a>
          {yesterdayYarn}
        </p>
      </div>
    </section>
  );
}

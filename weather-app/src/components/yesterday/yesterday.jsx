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
        className="colour-box"
      >
        <p className="card-color">{yesterdayTemp}°C</p>
      </div>

      <div className="card-info">
        <h3 className="card-name">COLOUR</h3>

        <ul className="links">
          <li className="thread">
            <a
              href="https://www.dmc.com/GB/en-GB/products/other-embroidery-thread"
              target="_blank"
            >
              Thread:
            </a>
            {yesterdayThread}
          </li>
          <li className="yarn">
            <a
              href="https://www.dmc.com/GB/en-GB/products/knitty-yarn/knitty-4"
              target="_blank"
            >
              Yarn:
            </a>
            {yesterdayYarn}
          </li>
        </ul>
      </div>
    </section>
  );
}

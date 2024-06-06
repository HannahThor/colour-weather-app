import React from "react";
import "./yesterday.css";
import { Link, useState } from "react";

export default function Yesterday({
  yesterdayTemp,
  yesterdayHex,
  yesterdayThread,
  yesterdayYarn,
}) {
  const [visible, setVisible] = useState("hidden");

  const handleMouseOver = () => setVisible("visible");
  const handleMouseOut = () => setVisible("hidden");

  return (
    <section className="yesterday-card">
      <div
        aria-label="yesterday-colour"
        style={{ backgroundColor: `${yesterdayHex}` }}
        className="colour-box"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <p style={{ visibility: `${visible}` }} className="card-color">
          {yesterdayTemp}°C
        </p>
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

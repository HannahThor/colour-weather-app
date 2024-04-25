import React from "react";
import "./footer.css";

export default function Footer({ palette }) {
  const colourChart = palette.map((item) => {
    return (
      <li className="each-colour" key={item.id}>
        <div
          className="colour-item"
          style={{ backgroundColor: `${item.hex}` }}
        ></div>
        <p className="TEMP">TEMP</p>
        <div className="itemTemp">{item.temp}°c</div>
      </li>
    );
  });

  return (
    <footer>
      <h4>List of Colours</h4>
      <ul className="colour-container">{colourChart}</ul>
    </footer>
  );
}

// make Footer.css file later

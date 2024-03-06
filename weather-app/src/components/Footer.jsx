import React from "react";

export default function Footer({ palette }) {
  const colourChart = palette.map((item) => {
    return (
      <div className="each-color" key={item.id}>
        <div style={{ backgroundColor: `${item.hex}` }}></div>
        <div>{item.temp}°c</div>
      </div>
    );
  });

  return (
    <footer>
      <h4>List of Colours</h4>
      <div className="container">
        <ul className="colour-list">{colourChart}</ul>
      </div>
    </footer>
  );
}

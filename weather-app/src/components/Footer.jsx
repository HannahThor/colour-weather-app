import React from "react";
import palette from "../assests/data.json";

export default function Footer() {
  const colourChart = palette.map((item) => {
    return (
      <div key={item.id}>
        <div>{item.color}</div>
        <div>{item.temp}</div>
      </div>
    );
  });

  return (
    <footer>
      <h4>List of Colours</h4>
      <ul>{colourChart}</ul>
    </footer>
  );
}

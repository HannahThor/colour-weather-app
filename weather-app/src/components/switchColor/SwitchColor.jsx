import React from "react";
import "./SwitchColor.css";

export default function Switch({ isToggled, onToggle }) {
  return (
    <label className="switchColor">
      <input
        className="inputColor"
        type="checkbox"
        checked={isToggled}
        onChange={onToggle}
      />
      <span className="sliderColor" />
    </label>
  );
}

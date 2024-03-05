import React from "react";

export default function Search({ location, searchCity, handleClick }) {
  return (
    <div className="form">
      <input type="search" onChange={searchCity} />
      <button onClick={handleClick}>Search</button>
    </div>
  );
}

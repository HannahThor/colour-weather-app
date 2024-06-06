import React from "react";

export default function Search({ location, searchCity, handleClick }) {
  return (
    <div className="form">
      <input type="search" onChange={searchCity} />
      <button className="search-button" onClick={handleClick}>
        <img className="search-img" src="./images/searchimg.png" />
      </button>
    </div>
  );
}

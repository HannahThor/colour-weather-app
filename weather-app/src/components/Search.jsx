import React from "react";

export default function Search({ location, searchCity, handleClick }) {
  return (
    <>
      <input type="search" onChange={searchCity} />
      <button onClick={handleClick}>Search</button>
    </>
  );
}

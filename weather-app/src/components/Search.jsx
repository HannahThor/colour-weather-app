import React from "react";
import { useState } from "react";

export default function Search({ location }) {
  const [searchInput, setSearchInput] = useState("London");

  const handleClick = async () => {
    const { temp_max, temp_min } = await location(searchInput);
    console.log(temp_max, temp_min);
  };

  const searchCity = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <>
      <input type="search" onChange={searchCity} />
      <button onClick={handleClick}>Search</button>
    </>
  );
}

import React from "react";

export default function Search({ location }) {
  const handleClick = async () => {
    const { temp_max, temp_min } = await location("london");
    console.log(temp_max, temp_min);
  };

  return (
    <>
      <input type="search"></input>
      <button onClick={handleClick}>Search</button>
    </>
  );
}

import React from "react";
import Weather from "./Weather";
import InitialDisplay from "./InitialDisplay";

export default function DisplayBox({ city }) {
  return (
    <main>{city === null ? <InitialDisplay /> : <Weather city={city} />}</main>
  );
}

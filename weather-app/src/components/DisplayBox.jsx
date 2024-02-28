import React from "react";
import Weather from "./Weather";
import InitialDisplay from "./InitialDisplay";

export default function DisplayBox() {
  const city = "london";

  return <main>{city === null ? <InitialDisplay /> : <Weather />}</main>;
}

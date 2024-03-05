import React from "react";
import Weather from "./Weather";
import InitialDisplay from "./InitialDisplay";
// import { useState } from "react";

export default function DisplayBox({ city, minTemp, maxTemp, yesterdayTemp }) {
  return (
    <main>
      {city === null ? (
        <InitialDisplay />
      ) : (
        <Weather
          city={city}
          maxTemp={maxTemp}
          minTemp={minTemp}
          yesterdayTemp={yesterdayTemp}
        />
      )}
    </main>
  );
}

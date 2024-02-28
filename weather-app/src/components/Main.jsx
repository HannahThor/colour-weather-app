import DisplayBox from "./DisplayBox";
import Header from "./Header";
import Search from "./Search";

const location = async (city) => {
  console.log(import.meta.env);
  const locationResponse = await fetch(
    `
    https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
      import.meta.env.VITE_WEATHER_API_KEY
    }
    `
  );
  const locationData = await locationResponse.json();
  console.log(locationData);

  // const lat = locationData[0].lat;
  const lat = locationData.coord.lat;
  const lon = locationData.coord.lon;
  console.log(lat, lon);
  return lat;
};

export default function Main() {
  return (
    <>
      <Header />
      <Search location={location} />
      <DisplayBox />
    </>
  );
}

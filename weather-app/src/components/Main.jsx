import DisplayBox from "./DisplayBox";
import Header from "./Header";
import Search from "./Search";

const location = async (city) => {
  const locationResponse = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=980d4eb7360007329a040bec58ab7eb3`
  );
  const locationData = await locationResponse.json();
  console.log(locationData);

  // const lat = locationData[0].lat;
  const { lat, lon } = locationData[0];
  console.log(lat, lon);
  return { lat, lon };
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

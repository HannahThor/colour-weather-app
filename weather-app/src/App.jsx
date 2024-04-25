import "./App.css";
import Footer from "./components/footer/Footer";
import Main from "./components/Main";
import palette from "../src/assests/data.json";

function App() {
  return (
    <>
      <Main palette={palette} />
      <Footer palette={palette} />
    </>
  );
}

export default App;

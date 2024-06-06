import "./App.css";
import Footer from "./components/footer/Footer";
import Main from "./components/Main/Main";
import Header from "./components/header/Header";
import palette from "../src/assests/data.json";

function App() {
  return (
    <>
      <Header />
      <Main palette={palette} />
      <Footer palette={palette} />
    </>
  );
}

export default App;

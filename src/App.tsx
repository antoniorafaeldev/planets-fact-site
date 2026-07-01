import { Navbar } from "./components/Navbar";
import { Planet } from "./components/Planet";
import  EarthImage from "./assets/planet-earth.svg"
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Planet
        name="Earth"
        description="Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive."
        infoSource="https://en.wikipedia.org/wiki/Earth"
        imgSrc={EarthImage}
        information={{
          rotationTime: "0.99 days",
          revolutionTime: "365.26 days",
          radius: "6,371 km",
          averageTemp: "16°C",
        }}
      />
    </>
  );
}

export default App;

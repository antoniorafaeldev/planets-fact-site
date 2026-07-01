import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Planet } from "./components/Planet";
import planets from "./data.json";

import "./App.css";

function App() {
  const [currentPlanet, setCurrentPlanet] = useState("Earth");
  const [activeView, setActiveView] = useState<
    "overview" | "structure" | "geology"
  >("overview");

  const planet = planets.find((planet) => planet.name === currentPlanet);

  if (!planet) return null;

  const { content, source } = planet[activeView];
  const {name, rotation, revolution, radius, temperature} = planet;


  const image =
    activeView === "overview"
      ? planet.images.planet
      : activeView === "structure"
        ? planet.images.internal
        : planet.images.geology;

  const handlePlanetChange = (planetName: string) => {
    setCurrentPlanet(planetName);
    setActiveView("overview");
  }

  return (
    <>
      <Navbar onPlanetChange={handlePlanetChange} />
      <Planet
        name={name}
        description={content}
        infoSource={source}
        imgSrc={image}
        information={{
          rotationTime: rotation,
          revolutionTime: revolution,
          radius: radius,
          averageTemp: temperature,
        }}
      />
    </>
  );
}

export default App;

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
  const { name, rotation, revolution, radius, temperature } = planet;

  const image =
    activeView === "overview"
      ? planet.images.planet
      : activeView === "structure"
        ? planet.images.internal
        : planet.images.geology;

  const handlePlanetChange = (planetName: string) => {
    setCurrentPlanet(planetName);
    setActiveView("overview");
  };

  const handleViewChange = (view: "overview" | "structure" | "geology") => {
    setActiveView(view);

    const overviewButton = document.getElementById("overview");
    const structureButton = document.getElementById("structure");
    const geologyButton = document.getElementById("geology");

    if (overviewButton && structureButton && geologyButton) {
      overviewButton.classList.remove("active");
      structureButton.classList.remove("active");
      geologyButton.classList.remove("active");
    }

    if (view === "overview" && overviewButton) {
      overviewButton.classList.add("active");
    } else if (view === "structure" && structureButton) {
      structureButton.classList.add("active");
    } else if (view === "geology" && geologyButton) {
      geologyButton.classList.add("active");
    }
    
  };
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
        onViewChange={handleViewChange}
      />
    </>
  );
}

export default App;

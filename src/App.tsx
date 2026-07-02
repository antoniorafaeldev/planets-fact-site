import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Planet } from "./components/Planet";
import planets from "./data.json";

import "./App.css";
import "./responsive.css";

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
    activeView === "overview" || activeView === "geology"
      ? planet.images.planet
      : planet.images.internal;
  const surfaceImage = planet.images.geology;
  const showSurfaceImage = activeView === "geology";

  const handlePlanetChange = (planetName: string) => {
    setCurrentPlanet(planetName);
    setActiveView(activeView);
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
        surfaceImg={surfaceImage}
        showSurfaceImage={showSurfaceImage}
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

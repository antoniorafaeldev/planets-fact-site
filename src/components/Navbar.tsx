import { useState } from "react";
import hamburgerIcon from "/images/icon-hamburger.svg";

export function Navbar({
  currentPlanet,
  onPlanetChange,
}: {
  currentPlanet: string;
  onPlanetChange: (planetName: string) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handlePlanetClick = (planetName: string) => {
    setMenuOpen(false);
    onPlanetChange(planetName);
  };

  return (
    <nav className="navbar">
      <span className="navbar-logo">The Planets</span>
      <button
        className="navbar-toggle"
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((current) => !current)}
      >
        <img src={hamburgerIcon} alt="Menu" />
      </button>
      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <li>
          <a
            className={`navbar-link mercury ${currentPlanet === "Mercury" ? "active-mercury" : ""}`}
            href="#mercury"
            onClick={() => handlePlanetClick("Mercury")}
          >
            Mercury
          </a>
        </li>
        <li>
          <a
            className={`navbar-link venus ${currentPlanet === "Venus" ? "active-venus" : ""}`}
            href="#venus"
            onClick={() => handlePlanetClick("Venus")}
          >
            Venus
          </a>
        </li>
        <li>
          <a
            className={`navbar-link earth ${currentPlanet === "Earth" ? "active-earth" : ""}`}
            href="#earth"
            onClick={() => handlePlanetClick("Earth")}
          >
            Earth
          </a>
        </li>
        <li>
          <a
            className={`navbar-link mars ${currentPlanet === "Mars" ? "active-mars" : ""}`}
            href="#mars"
            onClick={() => handlePlanetClick("Mars")}
          >
            Mars
          </a>
        </li>
        <li>
          <a
            className={`navbar-link jupiter ${currentPlanet === "Jupiter" ? "active-jupiter" : ""}`}
            href="#jupiter"
            onClick={() => handlePlanetClick("Jupiter")}
          >
            Jupiter
          </a>
        </li>
        <li>
          <a
            className={`navbar-link saturn ${currentPlanet === "Saturn" ? "active-saturn" : ""}`}
            href="#saturn"
            onClick={() => handlePlanetClick("Saturn")}
          >
            Saturn
          </a>
        </li>
        <li>
          <a
            className={`navbar-link uranus ${currentPlanet === "Uranus" ? "active-uranus" : ""}`}
            href="#uranus"
            onClick={() => handlePlanetClick("Uranus")}
          >
            Uranus
          </a>
        </li>
        <li>
          <a
            className={`navbar-link neptune ${currentPlanet === "Neptune" ? "active-neptune" : ""}`}
            href="#neptune"
            onClick={() => handlePlanetClick("Neptune")}
          >
            Neptune
          </a>
        </li>
      </ul>
    </nav>
  );
}

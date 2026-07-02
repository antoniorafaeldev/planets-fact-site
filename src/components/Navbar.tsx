import { useState } from "react";
import hamburgerIcon from "../assets/icon-hamburger.svg";

export function Navbar({
  onPlanetChange,
}: {
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
            className="navbar-link mercury"
            href="#mercury"
            onClick={() => handlePlanetClick("Mercury")}
          >
            Mercury
          </a>
        </li>
        <li>
          <a
            className="navbar-link venus"
            href="#venus"
            onClick={() => handlePlanetClick("Venus")}
          >
            Venus
          </a>
        </li>
        <li>
          <a
            className="navbar-link earth"
            href="#earth"
            onClick={() => handlePlanetClick("Earth")}
          >
            Earth
          </a>
        </li>
        <li>
          <a
            className="navbar-link mars"
            href="#mars"
            onClick={() => handlePlanetClick("Mars")}
          >
            Mars
          </a>
        </li>
        <li>
          <a
            className="navbar-link jupiter"
            href="#jupiter"
            onClick={() => handlePlanetClick("Jupiter")}
          >
            Jupiter
          </a>
        </li>
        <li>
          <a
            className="navbar-link saturn"
            href="#saturn"
            onClick={() => handlePlanetClick("Saturn")}
          >
            Saturn
          </a>
        </li>
        <li>
          <a
            className="navbar-link uranus"
            href="#uranus"
            onClick={() => handlePlanetClick("Uranus")}
          >
            Uranus
          </a>
        </li>
        <li>
          <a
            className="navbar-link neptune"
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

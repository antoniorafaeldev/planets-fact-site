import { useState } from "react";
import hamburgerIcon from "../assets/icon-hamburger.svg";

export function Navbar({
  onPlanetChange,
}: {
  onPlanetChange: (planetName: string, event: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handlePlanetClick = (planetName: string, event: React.MouseEvent<HTMLAnchorElement>) => {
    setMenuOpen(false);
    onPlanetChange(planetName, event);
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
            onClick={(event) => handlePlanetClick("Mercury", event)}
          >
            Mercury
          </a>
        </li>
        <li>
          <a
            className="navbar-link venus"
            href="#venus"
            onClick={(event) => handlePlanetClick("Venus", event)}
          >
            Venus
          </a>
        </li>
        <li>
          <a
            className="navbar-link earth"
            href="#earth"
            onClick={(event) => handlePlanetClick("Earth", event)}
          >
            Earth
          </a>
        </li>
        <li>
          <a
            className="navbar-link mars"
            href="#mars"
            onClick={(event) => handlePlanetClick("Mars", event)}
          >
            Mars
          </a>
        </li>
        <li>
          <a
            className="navbar-link jupiter"
            href="#jupiter"
            onClick={(event) => handlePlanetClick("Jupiter", event)}
          >
            Jupiter
          </a>
        </li>
        <li>
          <a
            className="navbar-link saturn"
            href="#saturn"
            onClick={(event) => handlePlanetClick("Saturn", event)}
          >
            Saturn
          </a>
        </li>
        <li>
          <a
            className="navbar-link uranus"
            href="#uranus"
            onClick={(event) => handlePlanetClick("Uranus", event)}
          >
            Uranus
          </a>
        </li>
        <li>
          <a
            className="navbar-link neptune"
            href="#neptune"
            onClick={(event) => handlePlanetClick("Neptune", event)}
          >
            Neptune
          </a>
        </li>
      </ul>
    </nav>
  );
}

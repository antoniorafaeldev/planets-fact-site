export function Navbar({ onPlanetChange }: { onPlanetChange: (planetName: string) => void }) {
  return (
    <nav className="navbar">
      <span className="navbar-logo">The Planets</span>
      <ul className="navbar-links">
        <li>
          <a
            className="navbar-link"
            href="#mercury"
            onClick={() => onPlanetChange("Mercury")}
          >
            Mercury
          </a>
        </li>
        <li>
          <a
            className="navbar-link"
            href="#venus"
            onClick={() => onPlanetChange("Venus")}
          >
            Venus
          </a>
        </li>
        <li>
          <a
            className="navbar-link"
            href="#earth"
            onClick={() => onPlanetChange("Earth")}
          >
            Earth
          </a>
        </li>
        <li>
          <a
            className="navbar-link"
            href="#mars"
            onClick={() => onPlanetChange("Mars")}
          >
            Mars
          </a>
        </li>
        <li>
          <a
            className="navbar-link"
            href="#jupiter"
            onClick={() => onPlanetChange("Jupiter")}
          >
            Jupiter
          </a>
        </li>
        <li>
          <a
            className="navbar-link"
            href="#saturn"
            onClick={() => onPlanetChange("Saturn")}
          >
            Saturn
          </a>
        </li>
        <li>
          <a
            className="navbar-link"
            href="#uranus"
            onClick={() => onPlanetChange("Uranus")}
          >
            Uranus
          </a>
        </li>
        <li>
          <a
            className="navbar-link"
            href="#neptune"
            onClick={() => onPlanetChange("Neptune")}
          >
            Neptune
          </a>
        </li>
      </ul>
    </nav>
  );
}

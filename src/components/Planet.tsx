import type { PlanetProps } from "../interfaces/planet";
import type { optionButtonProps } from "../interfaces/optionButton";

export function Planet({
  name,
  description,
  infoSource,
  imgSrc,
  surfaceImg,
  showSurfaceImage,
  information,
  currentPlanet,
  activeView,
  onViewChange,
}: PlanetProps) {
  const activePlanetClass = currentPlanet.toLowerCase();
  const optionClass = (view: "overview" | "structure" | "geology") =>
    `planet-option${activeView === view ? ` active active-${activePlanetClass}` : ""}`;

  return (
    <section className="planet">
      <div className="planet-info">
        <div className="planet-image">
          <img
            src={imgSrc}
            alt={name}
            className={`planet-image__img ${name.toLowerCase()}-img`}
          />
          {showSurfaceImage && (
            <img
              src={surfaceImg}
              alt={`${name} surface`}
              className="planet-surface"
            />
          )}
        </div>
        <div className="planet-details">
          <div className="planet-header">
            <h2 className="planet-name">{name}</h2>
            <p className="planet-description">{description}</p>
            <p className="planet-info-source">
              Source:{" "}
              <a href={infoSource} className="planet-info-link" target="_blank">
                Wikipedia
              </a>
            </p>
          </div>

          <div className="planet-options">
            <OptionButton
              className={optionClass("overview")}
              id="overview"
              onClick={() => onViewChange("overview")}
            >
              <span>01</span> <span>Overview</span>
            </OptionButton>
            <OptionButton
              className={optionClass("structure")}
              id="structure"
              onClick={() => onViewChange("structure")}
            >
              <span>02</span> <span>Structure</span>
            </OptionButton>
            <OptionButton
              className={optionClass("geology")}
              id="geology"
              onClick={() => onViewChange("geology")}
            >
              <span>03</span> <span>Surface</span>
            </OptionButton>
          </div>
        </div>
      </div>
      <div className="planet-stats">
        <Stat title="Rotation Time" value={information.rotationTime} />
        <Stat title="Revolution Time" value={information.revolutionTime} />
        <Stat title="Radius" value={information.radius} />
        <Stat title="Average Temp." value={information.averageTemp} />
      </div>
    </section>
  );
}

function OptionButton({className, id, onClick, children}: optionButtonProps) {
  return (
    <button className={className} id={id} onClick={onClick}>
      {children}
    </button>
  );
}

function Stat({ title, value }: { title: string; value: string }) {
  return (
    <div className="planet-stat">
      <h3 className="planet-stat-title">{title}</h3>
      <p className="planet-stat-value">{value}</p>
    </div>
  );
}

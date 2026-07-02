import type { PlanetProps } from "../interfaces/planet";

export function Planet({
  name,
  description,
  infoSource,
  imgSrc,
  surfaceImg,
  showSurfaceImage,
  information,
  onViewChange,
}: PlanetProps) {
  return (
    <section className="planet">
      <div className="planet-info">
        <div className="planet-image">
          <img src={imgSrc} alt={name} className="planet-image__img" />
          {showSurfaceImage && (
            <img
              src={surfaceImg}
              alt={`${name} surface`}
              className="planet-surface"

            />
          )}
        </div>
        <div className="planet-details">
          <h2 className="planet-name">{name}</h2>
          <p className="planet-description">{description}</p>
          <p className="planet-info-source">
            Source:{" "}
            <a href={infoSource} className="planet-info-link" target="_blank">
              Wikipedia
            </a>
          </p>
          <div className="planet-options">
            <button
              className="planet-option active"
              id="overview"
              onClick={() => onViewChange("overview")}
            >
              <span>01</span> <span>Overview</span>
            </button>
            <button
              className="planet-option"
              id="structure"
              onClick={() => onViewChange("structure")}
            >
              <span>02</span> <span>Structure</span>
            </button>
            <button
              className="planet-option"
              id="geology"
              onClick={() => onViewChange("geology")}
            >
              <span>03</span> <span>Surface</span>
            </button>
          </div>
        </div>
      </div>
      <div className="planet-stats">
        <Stat title="Rotation Time" value={information.rotationTime} />
        <Stat title="Revolution Time" value={information.revolutionTime} />
        <Stat title="Radius" value={information.radius} />
        <Stat title="Average Temperature" value={information.averageTemp} />
      </div>
    </section>
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

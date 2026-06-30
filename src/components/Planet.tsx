import type { PlanetProps } from "../interfaces/planet";

export function Planet({
  name,
  description,
  infoSource,
  imgSrc,
  information,
}: PlanetProps) {
  return (
    <section className="planet">
      <div className="planet-info">
        <div className="planet-image">
          <img src={imgSrc} alt={name} />
        </div>
        <div className="planet-details">
          <h2>{name}</h2>
          <p>{description}</p>
          <p>
            Source:{" "}
            <a href={infoSource} target="_blank">
              Wikipedia
            </a>
          </p>
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
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}

export interface PlanetProps {
  name: string;
  description: string;
  infoSource: string;
  imgSrc: string;
  surfaceImg: string;
  showSurfaceImage: boolean;
  information: {
    rotationTime: string;
    revolutionTime: string;
    radius: string;
    averageTemp: string;
  };
  onViewChange: (view: "overview" | "structure" | "geology") => void;
}

export interface Planet {
    name: string;
    description: string;
    infoSource: string;
    imgSrc: string;
    information: {
        rotationTime: string;
        revolutionTime: string;
        radius: string;
        averageTemp: string;
    };
}
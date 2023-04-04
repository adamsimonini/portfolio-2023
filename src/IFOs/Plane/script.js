class PlaneClass {
  constructor({
    name = "flyer",
    direction = "left",
    speed = 10,
    size = 1,
    width = "150px",
  }) {
    this.name = name;
    this.direction = direction;
    this.speed = speed;
    this.size = size;
    this.width = width;
    this.logger = () => {
      console.log(this);
    };
  }
  static directions = ["right", "left"];
  static minFlightTime = 10;
  static maxFlightTime = 35;
}

// flight times are in seconds
const minFlightTime = 10;
const maxFlightTime = 25;
const directions = ["right", "left"];

// since the speed should be affected by distance via motion parallax, and quicker speeds are a lower number (number of seconds it takes for the plane to travel a given route), we have to divide the speed from a standard number, to make bigger objects faster and smaller objects slower
// planeVariables.size = `${2000 / planeVariables.speed}px`;
const planeStyles = (plane) => {
  return {
    animationName: `fly-${plane.direction}`,
    animationIterationCount: 1,
    animationDuration: `${plane.speed}s`,
    width: `${plane.width}`,
  };
};

const planeClassName = (plane) => {
  return `image plane plane-${plane.direction} flex`;
};

export { planeStyles, planeClassName, PlaneClass };

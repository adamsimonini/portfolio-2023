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

const generateRandomPlane = () => {
  const directions = ["right", "left"];
  const speed = Math.random() * (25 - 10) + 10; // Random speed between 10 and 25
  const size = 1000 / speed; // Inverse relationship between size and speed
  const direction = directions[Math.floor(Math.random() * directions.length)];

  return new PlaneClass({
    direction,
    speed,
    size,
    width: `${size}px`,
  });
};

const planeStyles = (plane) => ({
  animationName: `fly-${plane.direction}`,
  animationIterationCount: 1,
  animationDuration: `${plane.speed}s`,
  width: `${plane.width}`,
});

const planeClassName = (plane) => `image plane plane-${plane.direction} flex`;

export { planeStyles, planeClassName, PlaneClass, generateRandomPlane };

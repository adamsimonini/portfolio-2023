// Plane "physics": one random distance value drives everything, so far planes
// read as far — smaller, slower across the screen, dimmer, slightly blurred.
const MIN_SPEED = 22; // seconds to cross, closest plane
const MAX_SPEED = 65; // seconds to cross, farthest plane
const MAX_WIDTH = 150; // px, closest plane
const MIN_WIDTH = 42; // px, farthest plane

const generateRandomPlane = () => {
  const distance = Math.random(); // 0 = close, 1 = far
  // Bigger plane = closer = crosses faster; smaller = farther = slower.
  const speed = MIN_SPEED + distance * (MAX_SPEED - MIN_SPEED);
  const width = Math.round(MAX_WIDTH - distance * (MAX_WIDTH - MIN_WIDTH));

  // The plane art is drawn nose-up, so every flight climbs: enter low in the
  // sky band and rise. Steep climbs may exit off the top of the screen before
  // reaching the far side. No plane ever descends toward the skyline.
  const startTop = 26 + Math.random() * 26; // 26–52% — low sky, above the ground
  const climb = 15 + Math.random() * 30; // rise 15–45vh over the crossing
  const endTop = Math.max(-12, startTop - climb);

  const direction = Math.random() < 0.5 ? "right" : "left";

  return {
    direction,
    speed,
    width,
    startTop,
    endTop,
    opacity: 1 - distance * 0.45,
    blur: distance > 0.65 ? 1 : 0,
    z: Math.round(10 - distance * 9), // near planes pass in front of far ones
  };
};

const planeStyles = (plane) => ({
  width: `${plane.width}px`,
  opacity: plane.opacity,
  zIndex: plane.z,
  filter: plane.blur ? `blur(${plane.blur}px)` : "none",
  animationName: `fly-${plane.direction}`,
  animationDuration: `${plane.speed}s`,
  "--start-top": `${plane.startTop}%`,
  "--end-top": `${plane.endTop}%`,
});

const planeClassName = (plane) => `plane plane-${plane.direction}`;

export { planeStyles, planeClassName, generateRandomPlane };

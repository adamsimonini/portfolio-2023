import React from "react";
// import PlaneImage from "@images/plane-1.svg";
// import PlaneImage from "@images/star.png";
import PlaneImage from "@images/white-star.png";
import { PlaneClass } from "./script.js";
import "./styles.css";

// flight times are in seconds
const minFlightTime = 5;
const maxFlightTime = 15;

const planeVariables = {
  directions: ["right", "left"],
  speed: Math.floor(
    Math.random() * (maxFlightTime - minFlightTime + 1) + minFlightTime
  ),
};

// since the speed should be affected by distance via motion parallax, and quicker speeds are a lower number (number of seconds it takes for the plane to travel a given route), we have to divide the speed from a standard number, to make bigger objects faster and smaller objects slower
// planeVariables.size = `${2000 / planeVariables.speed}px`;
planeVariables.size = `${100 / planeVariables.speed}px`;

const newPlane = new PlaneClass({
  name: "plane",
  direction:
    planeVariables.directions[
      Math.floor(Math.random() * planeVariables.directions.length)
    ],
  size: `${planeVariables.size}px`,
  speed: planeVariables.speed,
});

console.log(newPlane);

let planeStyles = {
  animationName: `fly-${newPlane.direction}`,
  animationIterationCount: 1,
  animationDuration: `${planeVariables.speed}s`,
  width: planeVariables.size,
};

let planeClassName = `image plane plane-${newPlane.direction} w-[100px] flex rotating`;

function Plane() {
  return (
    <>
      <div className={planeClassName} style={planeStyles}>
        <img className="ast-img rotating" src={PlaneImage} alt="" />
      </div>
    </>
  );
}

export default Plane;

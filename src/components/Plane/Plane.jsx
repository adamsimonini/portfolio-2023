import React from "react";
import PlaneImage from "@images/plane-1.svg";
import { PlaneClass } from "./script.js";
import "./styles.css";

// const newPlane = new PlaneClass("Toronto", "right", 5);

const planeVariables = {
  directions: ["right", "left"],
  speed: Math.floor(Math.random() * (15 - 7 + 1) + min),
};

const newPlane = new PlaneClass({
  direction:
    planeVariables.directions[
      Math.floor(Math.random() * planeVariables.directions.length)
    ],
  size: 5,
  speed: planeVariables.speed,
  name: "Detroit",
});

console.log(newPlane);

// let flyRight = Math.random() < 0.5;
let flyRight = newPlane.direction == "right" ? true : false;

let planeClassName = "image lg:hidden w-[100px] flex";

planeClassName = flyRight
  ? (planeClassName += " plane-right")
  : (planeClassName += " plane-left");

function Plane() {
  return (
    <>
      <div className={planeClassName}>
        <img className="w-96 ast-img" src={PlaneImage} alt="" />
      </div>
    </>
  );
}

export default Plane;

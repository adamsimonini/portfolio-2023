import React, { useState, useEffect, useRef } from "react";
import Plane from "@components/Plane/Plane.jsx";
import {
  planeStyles,
  planeClassName,
  PlaneClass,
} from "@components/Plane/script.js";
// import {Plane} from "@components/Plane/Plane.jsx";
import bg from "@images/city-dusk.svg";
// import bg from "@images/miami.jpg";
// import bg from "@images/howling-space.jpg";
// import bg from "@images/forest-fox.jpg";
import Navbar from "./Navbar";
import "../styles.css";
import AudiPlayer from "./AudioPlayer/AudioPlayer";

function Header() {
  const newPlane = new PlaneClass({
    // todo, consider moving randomization into the PlaneClass itself
    name: "plane",
    direction:
      PlaneClass.directions[
        Math.floor(Math.random() * PlaneClass.directions.length)
      ],
    speed: Math.floor(
      Math.random() *
        (PlaneClass.maxFlightTime - PlaneClass.minFlightTime + 1) +
        PlaneClass.minFlightTime
    ),
  });
  const [planesArrState, setPlanesArrsState] = useState([newPlane]);

  // let planeArrRef = useRef([]);

  // TODO: this is not a reliable way of solving the infinite plane component issue. I would rather have each plane instance itself decide for itself when it should be destroyed, and then have it execute that logic itself
  useEffect(() => {
    setTimeout(() => {
      console.log(planesArrState);
      const newPlane = new PlaneClass({
        // todo, consider moving randomization into the PlaneClass itself
        name: "plane",
        direction:
          PlaneClass.directions[
            Math.floor(Math.random() * PlaneClass.directions.length)
          ],
        speed: Math.floor(
          Math.random() *
            (PlaneClass.maxFlightTime - PlaneClass.minFlightTime + 1) +
            PlaneClass.minFlightTime
        ),
      });
      newPlane.width = `${Math.floor(3000 / newPlane.speed)}px`;

      setPlanesArrsState([...planesArrState, newPlane]);
    }, 25000);
  });

  return (
    <>
      <div
        id="home"
        style={{ backgroundImage: `url(${bg})` }}
        className=" bg-center bg-cover bg-no-repeat h-screen flex flex-col "
      >
        <Navbar />
        <div className="wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
          <div className="bio content lg:text-center">
            <h1 className="text-white text-5xl font-bold">Hi, I'm Adam</h1>
            <p className="text-white py-4 max-w-lg">
              I'm a fullstack developer working out of my hometown of Toronto,
              Canada. I'm most familiar with JavaScript and Python. I have been
              coding for 6+ years.
            </p>
            <p className="text-white py-4 max-w-lg">
              My hobbies include boxing, gaming, latin dancing, and teaching.
              You're welcome to connect with me on LinkedIn or GitHub.
            </p>
            <button className="  text-white text-2xl">
              Find me on GitHub{" "}
              <i className="fa-solid fa-arrow-right text-lg  p-[2px] "></i>{" "}
            </button>
          </div>
          {planesArrState.map((plane, i) => (
            <div key={i}>
              <Plane
                planeClassName={planeClassName(plane)}
                planeStyles={planeStyles(plane)}
              />
            </div>
          ))}
          {/* <Plane
            planeClassName={planeClassName(newPlane)}
            planeStyles={planeStyles(newPlane)}
          /> */}
          {/* <Plane
            planeClassName={planeClassName(newPlane)}
            planeStyles={planeStyles(newPlane)}
          />
          <Plane
            planeClassName={planeClassName(newPlane)}
            planeStyles={planeStyles(newPlane)}
          /> */}
          {/* <Plane /> */}
        </div>
        <AudiPlayer />
      </div>
    </>
  );
}

export default Header;

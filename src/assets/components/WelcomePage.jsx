import React, { useState, useEffect } from "react";
import Plane from "@ifos/Plane/Plane.jsx";
import { planeStyles, planeClassName, PlaneClass } from "@ifos/Plane/script.js";
import AudioPlayer from "@components/AudioPlayer/AudioPlayer";
import styled from "styled-components";

// import bg from "@images/howling-space-min.jpg";
// import bg from "@images/miami.jpg";
// import bg from "@images/forest-fox.jpg";

import Navbar from "./Navbar";
import "../styles.css";

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 5px;
`;

function WelcomePage() {
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

  // TODO: this is not a reliable way of solving the infinite plane component issue. I would rather have each plane instance itself decide for itself when it should be destroyed, and then have it execute that logic itself
  useEffect(() => {
    // setTimeout(() => {
    //   setPlanesArrsState([]);
    //   const newPlane = new PlaneClass({
    //     // todo, consider moving randomization into the PlaneClass itself
    //     name: "plane",
    //     direction:
    //       PlaneClass.directions[
    //         Math.floor(Math.random() * PlaneClass.directions.length)
    //       ],
    //     speed: Math.floor(
    //       Math.random() *
    //         (PlaneClass.maxFlightTime - PlaneClass.minFlightTime + 1) +
    //         PlaneClass.minFlightTime
    //     ),
    //   });
    //   newPlane.width = `${Math.floor(3000 / newPlane.speed)}px`;
    //   setPlanesArrsState([...planesArrState, newPlane]);
    // }, 25000);
  });

  return (
    <>
      {/* <div
        id="welcome"
        style={{ backgroundImage: `url(${bg})` }}
        className=" bg-center bg-cover bg-no-repeat h-screen flex flex-col "
      >
        <Navbar />
        <main className="wrapper flex justify-between h-screen w-full px-20 lg:px-6">
          <section className="bio content">
            <div id="bio-inner">
              {/* <h1 className="text-5xl font-bold">Welcome</h1> */}
              <p className="py-4 max-w-lg">
                I'm a full stack developer working out of my hometown of
                Toronto, Canada. I have been coding for 6+ years, and I'm most
                familiar with JavaScript and Python.
              </p>
              <p className="py-4 max-w-lg">
                Listen to some chillhop and checkout my portfolio below.
              </p>
              <a href="https://github.com/adamsimonini" target="_blank">
                <Button primary className="text-2xl">
                  Find me on GitHub{" "}
                  <i className="fa-solid fa-external-link text-lg  p-[2px] "></i>{" "}
                </Button>
                {/* Test of glowing button */}
                {/* <dvi class="glowing-btn">Hello</dvi> */}
              </a>
            </div>
          </section>
          {planesArrState.map((plane, i) => (
            <div key={i}>
              <Plane
                planeClassName={planeClassName(plane)}
                planeStyles={planeStyles(plane)}
              />
            </div>
          ))}
        </main>
        <AudioPlayer />
      </div> */}
    </>
  );
}

export default WelcomePage;

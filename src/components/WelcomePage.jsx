import React, { useState, useEffect } from "react";
import Plane from "@ifos/Plane/Plane.jsx";
import {
  generateRandomPlane,
  planeStyles,
  planeClassName,
} from "@ifos/Plane/script.js";
import AudioPlayer from "@components/AudioPlayer/AudioPlayer";
import styled from "styled-components";

import bg from "@images/howling-space-min.jpg";
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
  const [planes, setPlanes] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPlane = {
        ...generateRandomPlane(),
        id: Date.now() + Math.random(),
      };
      setPlanes((prevPlanes) => [...prevPlanes, newPlane]);
    }, Math.random() * 10000 + 5000);

    return () => clearInterval(interval);
  }, []);

  const handleRemovePlane = (planeId) => {
    setPlanes((prevPlanes) =>
      prevPlanes.filter((plane) => plane.id !== planeId)
    );
  };

  return (
    <>
      <div
        id="welcome"
        style={{ backgroundImage: `url(${bg})` }}
        className=" bg-center bg-cover bg-no-repeat h-screen flex flex-col "
      >
        <Navbar />
        <main className="wrapper flex justify-between h-screen w-full px-20 lg:px-6">
          <section className="bio content">
            <div id="bio-inner">
              <div id="bio-text">
                <p className="py-4 max-w-lg">
                  I'm a full stack developer working out of my hometown of
                  Toronto, Canada. I have been coding for 6+ years, and I'm most
                  familiar with JavaScript and Python.
                </p>
                <p className="py-4 max-w-lg">
                  Listen to some chillhop and checkout my portfolio below.
                </p>
              </div>
              <a href="https://github.com/adamsimonini" target="_blank">
                <Button primary className="text-2xl">
                  Find me on GitHub{" "}
                  <i className="fa-solid fa-external-link text-lg  p-[2px] "></i>{" "}
                </Button>
              </a>
            </div>
          </section>
          <section className="planes">
            {planes.map((plane) => (
              <Plane
                key={plane.id}
                plane={plane}
                onRemove={handleRemovePlane}
              />
            ))}
          </section>
        </main>
        <AudioPlayer />
      </div>
    </>
  );
}

export default WelcomePage;

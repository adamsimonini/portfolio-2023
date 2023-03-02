import React from "react";
import Plane from "@components/Plane/Plane.jsx";
import logo1 from "@images/plane-1.svg";
import bg from "@images/city-dusk.svg";
import Navbar from "./Navbar";
import "../styles.css";
import AudiPlayer from "./AudioPlayer/AudioPlayer";

let flyRight = Math.random() < 0.5;

let planeClassName = "image lg:hidden w-[100px] flex";

// planeClassName += " plane-right";

planeClassName = flyRight
  ? (planeClassName += " plane-right")
  : (planeClassName += " plane-left");

console.log(`flyRight: ${flyRight}`);

function Header() {
  return (
    <>
      <div
        id="home"
        style={{ backgroundImage: `url(${bg})` }}
        className=" bg-center bg-cover bg-no-repeat h-screen flex flex-col "
      >
        <Navbar />
        <div className="wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
          <div className="content lg:text-center">
            <h1 className="text-white text-5xl font-bold">Hi, I'm Adam</h1>
            <p className="text-white py-4 max-w-lg">
              I'm a fullstack developer working out of my hometown of Toronto,
              Canada. I'm most familiar with JavaScript and Python. Recently, I
              started using Linux as my daily driver, and there is a lot to
              love. I have been coding for 6+ years.
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
          <Plane />
        </div>
        <AudiPlayer />
      </div>
    </>
  );
}

export default Header;

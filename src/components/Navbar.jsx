import React, { useState } from "react";
import "../styles.css";

function Navbar() {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    return false;
  }

  return (
    <>
      <div
        className="navbarcon flex justify-between items-center px-20 py-6 bg-transparent z-40 text-white lg:px-6 fixed w-full"
        style={{ zIndex: 100 }}
      >
        <h1 className="text-4xl  font-bold ">Adam Simonini</h1>

        <nav
          className={`flex justify-center items-center gap-x-10 lg:hidden lg:fixed lg:top-0 -z-20  lg:flex-col lg:w-full lg:bg-[#171717]  lg:h-[450px] lg:left-0 h-full lg:items-start  lg:pl-6  cursor-pointer lg:pt-20`}
        >
          <div className="icon text-lg flex gap-4  lg:gap-8 lg:my-10">
            <a href="https://www.linkedin.com/in/adamsimonini/" target="_blank">
              <i className="fa-brands fa-linkedin border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
            <a href="https://github.com/adamsimonini" target="_blank">
              <i className="fa-brands fa-github border-[1px] border-white p-2 rounded-[100%] hover:bg-white hover:text-black"></i>
            </a>
          </div>
        </nav>
        <i className="fa-solid fa-bars hidden lg:block text-2xl cursor-pointer"></i>
      </div>
    </>
  );
}

export default Navbar;

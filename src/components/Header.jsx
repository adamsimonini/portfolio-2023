import React from "react";
import logo from "../assets/images/astronout.png";
import logo1 from "../assets/images/plane-1.svg";
import bg from "../assets/images/city-dusk.svg";
import Navbar from "./Navbar";
import "../styles.css";

let flyRight = Math.random() < 0.5;

let planeClassName = "image lg:hidden w-[100px] flex";

// planeClassName += " plane-right";

planeClassName = flyRight ? (planeClassName += " plane-right") : (planeClassName += " plane-left");

console.log(`flyRight: ${flyRight}`);

function Header() {
	return (
		<>
			<div id="home" style={{ backgroundImage: `url(${bg})` }} className=" bg-center bg-cover bg-no-repeat h-screen flex flex-col ">
				<Navbar />
				<div className="wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
					<div className="content lg:text-center">
						<h1 className="text-white text-5xl font-bold">Hi, I'm Adam</h1>
						<p className="text-white py-4 max-w-lg">I'm a fullstack developer working out of my hometown of Toronto, Canada. I'm most familiar with JavaScript and Python. Recently, I started using Linux (Ubuntu) as my daily driver, and there is a lot to love.</p>
						<p className="text-white py-4 max-w-lg">My hobbies include boxing, gaming, latin dancing, and teaching. You're welcome to connect with me on LinkedIn or GitHub.</p>
						<button className="  text-white text-2xl">
							Find me on GitHub <i className="fa-solid fa-arrow-right text-lg  p-[2px] "></i>{" "}
						</button>
					</div>
					<div className={planeClassName}>
						<img className="w-96 ast-img" src={logo1} alt="" />
					</div>
					<div className="image plane-left lg:hidden w-[100px] flex ">
						<img className="w-96 ast-img" src={logo1} alt="" />
					</div>
				</div>
				<iframe id="spotify-frame" src="https://open.spotify.com/embed/playlist/0CFuMybe6s77w6QQrJjW7d?utm_source=generator" width="25%" height="300" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
			</div>
		</>
	);
}

export default Header;

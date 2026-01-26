import React from "react";
import Screen1 from "../assets/screen1.svg";
import Screen2 from "../assets/screen2.svg";

const AdSection1 = () => {
	return (
		<div>
			<div>
				<img src={Screen1} alt="" />
			</div>
			<div>
				<h1>Make Your Tv Smart.</h1>
				<h2>Make Your Smart Tv, Super Smart</h2>
				<button className=" bg-linear-to-r from-pink-500 via-purple-800 to-purple-900 px-10 py-3 w-80 max-w-7xl text-lg font-medium text-white">
					Buy Now
				</button>
			</div>
			<div>
				<img src={Screen2} alt="" />
			</div>
		</div>
	);
};

export default AdSection1;

import React from "react";
import Screen1 from "../assets/screen1.svg";
import Screen2 from "../assets/screen2.svg";

const AdSection1 = () => {
	return (
		<div className="flex flex-col items-center px-3">
			<div className="md:mb-36 md:-mt-52 -mt-23 mb-10 px-3">
				<img src={Screen1} alt="" />
			</div>
			<div className="my-5 flex flex-col items-center ">
				<div className="">
					<h1 className="md:text-7xl text-3xl md:mb-3 text-center">Make Your Tv Smart</h1>
					<h1 className="text-center md:text-5xl text-3xl bg-linear-to-r from-pink-500 via-purple-800 to-purple-900 bg-clip-text text-transparent">
						Make Your Smart Tv, Super Smart
					</h1>
				</div>

				<button className="rounded-md bg-linear-to-r from-pink-500 via-purple-800 to-purple-900 px-10 py-3 w-full md:w-80 text-sm md:text-lg font-medium text-white mt-10">
					Buy Now
				</button>
			</div>
			<div className="px-3">
				<img src={Screen2} alt="" />
			</div>
		</div>
	);
};

export default AdSection1;

import React from "react";
import Drive from "../assets/cyberstick_drive.svg";
import Remote from "../assets/cyberstick_remote.svg";

const Hero = () => {
	return (
		<div className="hero-bg ">
			<div className="m-auto w-[90%] flex justify-between py-10 shadow-xl">
				<div className="">
					<h1 className="text-gray-100 text-7xl pb-2">Think Beyond Smart</h1>
					<h1 className="bg-linear-to-r from-pink-500 via-purple-800 to-purple-900 bg-clip-text text-transparent text-7xl mb-3">
						Think Cyberstick
					</h1>
					<p className="text-gray-300 text-lg mb-10">
						A multi purpose smart device that converts any display to a smart tv
					</p>

					<button className="rounded-md  bg-linear-to-r from-pink-500 via-purple-800 to-purple-900 px-10 py-3 w-80 max-w-7xl text-lg font-medium text-white">
						Buy Now
					</button>
				</div>
				<div className="flex items-end">
					<img src={Drive} className="max-w-75" alt="" />
					<img src={Remote} className="" alt="" />
				</div>
			</div>
		</div>
	);
};

export default Hero;

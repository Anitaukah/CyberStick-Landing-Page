import React from "react";
import Screen1 from "../assets/screen1.svg";
import Screen2 from "../assets/screen2.svg";

const AdSection1 = () => {
	return (
		<div className="flex flex-col items-center">
			<div className="mb-36 -mt-52">
				<img src={Screen1} alt="" />
			</div>
			<div className="my-10 flex flex-col items-center">
				<div className="">
					<h1 className="text-7xl mb-3 text-center">Make Your Tv Smart.</h1>
					<h2 className="text-center text-5xl bg-linear-to-r from-pink-500 via-purple-800 to-purple-900 bg-clip-text text-transparent">
						Make Your Smart Tv, Super Smart
					</h2>
				</div>

				<button className="rounded-md  bg-linear-to-r from-pink-500 via-purple-800 to-purple-900 px-10 py-3 w-80 max-w-7xl text-lg font-medium text-white mt-10">
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

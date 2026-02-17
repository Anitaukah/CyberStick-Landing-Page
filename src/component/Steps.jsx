import React from "react";
import ArrowDown from "../assets/Screenshot 2022-04-11 at 04.15 1.svg";
import ArrowUp from "../assets/Screenshot 2022-04-11 at 04.15 2.svg";
import One from "../assets/1.svg";
import TVStick from "../assets/Tvwithstick.svg";
import Two from "../assets/2.svg";
import TVWifi from "../assets/WifiTv.svg";
import Three from "../assets/3.svg";
import TVPlay from "../assets/playTv.svg";

const Steps = () => {
	return (
		<div className="bg-black">
			<div className="m-auto w-[90%]">
				<div>
					<h1 className="text-white md:text-5xl text-center pt-14 text-3xl md:pt-24">
						Experience{" "}
						<span className="bg-linear-to-r from-pink-400 via-purple-800 to-purple-800  bg-clip-text text-transparent ">
							Cyberstick
						</span>
						<span className="align-super text-sm md:text-3xl text-purple-700">
							TM
						</span>
					</h1>
					<p className="pt-2 pb-12 leading-tight text-2xl text-white md:text-5xl text-center md:pt-3 md:pb-24">
						In 3 Steps
					</p>
				</div>

				<div className="grid justify-center gap-4">
					<img src={ArrowDown} className="md:-ml-12 md:mx-auto hidden md:block" alt="" />
					<div className="md:flex md:justify-evenly md:gap-6 grid grid-cols-1 gap-4">
						<div className="p-4 rounded md:p-3 justify-items-center bg-linear-to-t from-stone-950 via-stone-950 to-stone-900 drop-shadow-md">
							<img src={One} alt="" className="pb-3" />
							<div className="m-2">
								<img src={TVStick} alt="" className="m-2 w-24 md:w-auto" />
							</div>

							<p className="text-zinc-300 text-center w-37.5 text-sm">
								Connect Cyberstick{" "}
								<span className="align-super text-xs">TM</span> to your TV
							</p>
						</div>
						<div className="rounded md:p-3 p-4 justify-items-center bg-linear-to-t from-stone-950 via-stone-950 to-stone-900 drop-shadow-md">
							<img src={Two} alt="" className="pb-3" />
							<div className="m-2">
								<img src={TVWifi} alt="" className="w-24 md:w-auto" />
							</div>

							<p className="text-gray-300 text-center w-37.5 text-sm">
								Connect to WI-FI
							</p>
						</div>
						<div className="md:p-3 p-4 rounded justify-items-center bg-linear-to-t from-stone-950 via-stone-950 to-stone-900 drop-shadow-md">
							<img src={Three} alt="" className="pb-3" />
							<div className="m-2">
								<img src={TVPlay} alt="" className="w-24 md:w-auto" />
							</div>
							<p className="text-gray-300 text-center w-37.5 text-sm">
								Start Watching
							</p>
						</div>
					</div>
					<img src={ArrowUp} className="mx-auto md:w-auto hidden md:block" alt="" />
				</div>
			</div>
		</div>
	);
};

export default Steps;

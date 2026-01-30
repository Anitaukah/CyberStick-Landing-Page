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
					<h1 className="text-white text-5xl text-center pt-24">
						Experience{" "}
						<span className="bg-linear-to-r from-pink-400 via-purple-800 to-purple-800  bg-clip-text text-transparent ">
							Cyberstick
						</span>
						<span className="align-super text-2xl text-purple-700">TM</span>
					</h1>
					<p className="text-white text-5xl text-center pt-3 pb-24">
						In 3 Steps
					</p>
				</div>

				<div className="grid justify-center gap-4">
					<img src={ArrowDown} className=" -ml-12" alt="" />
					<div className="flex justify-evenly">
						<div className="p-3 justify-items-center bg-linear-to-t from-stone-950 via-stone-950 to-stone-900 drop-shadow-md">
							<img src={One} alt="" className="pb-3" />
							<div className="m-2">
								<img src={TVStick} alt="" className="m-2" />
							</div>

							<p className="text-gray-300 text-center w-37.5 text-sm">
								Connect Cyberstick{" "}
								<span className="align-super text-xs">TM</span> to your TV
							</p>
						</div>
						<div className="p-3  justify-items-center bg-linear-to-t from-stone-950 via-stone-950 to-stone-900 drop-shadow-md">
							<img src={Two} alt="" className="pb-3" />
							<div className="m-2">
								<img src={TVWifi} alt="" />
							</div>

							<p className="text-gray-300 text-center w-37.5 text-sm">
								Connect to WI-FI{" "}
							</p>
						</div>
						<div className="p-3  justify-items-center bg-linear-to-t from-stone-950 via-stone-950 to-stone-900 drop-shadow-md">
							<img src={Three} alt="" className="pb-3" />
							<div className="m-2">
								<img src={TVPlay} alt="" />
							</div>
							<p className="text-gray-300 text-center w-37.5 text-sm">
								Start Watching
							</p>
						</div>
					</div>
					<img src={ArrowUp} className="" alt="" />
				</div>
			</div>
		</div>
	);
};

export default Steps;

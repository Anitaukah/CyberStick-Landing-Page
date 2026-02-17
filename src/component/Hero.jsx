import React from "react";
import Drive from "../assets/cyberstick_drive.svg";
import Remote from "../assets/cyberstick_remote.svg";

const Hero = () => {
	return (
		<div className="hero-bg ">
			<div>
				<div className="m-auto w-[90%] flex flex-col md:flex-row py-18 shadow-xl gap-[10%]">
					<div className="">
						<h1 className="text-gray-100 md:text-6xl text-2xl leading-tight text-center ">
							Think Beyond Smart.
						</h1>
						<h1 className="md:text-left text-center bg-linear-to-r from-pink-500 via-purple-800 to-purple-900 bg-clip-text text-transparent md:py-3 md:text-6xl text-2xl">
							Think Cyberstick
						</h1>
						<p className="py-3 text-center text-stone-300 md:text-lg text-sm max-w-76 md:max-w-full mb-10">
							A multi purpose smart device that converts any display to a smart
							tv
						</p>

						<button className="w-full md:w-75 rounded-md  bg-linear-to-r from-pink-500 via-purple-800 to-purple-900 md:mt-18 px-10 py-3 text-sm md:text-lg font-semibold text-white">
							Buy Now
						</button>
					</div>
					<div className="flex items-end justify-center gap-4 pt-18 md:pt-0 ">
						<img src={Drive} className="w-24 md:w-full" alt="" />
						<img src={Remote} className="md:w-full w-32 " alt="" />
					</div>
				</div>

				<div className="flex flex-col items-center pt-8 px-4 md:pb-58 pb-30 ">
				<h1 className="md:text-7xl text-2xl text-gray-100 md:max-w-3xl text-center py-6">
					<span className="bg-linear-to-r from-pink-500 via-purple-800 to-purple-900 bg-clip-text text-transparent mr-5">
						Unlock
					</span>
					A Whole New World Of Content
				</h1>
				<p className="text-stone-300 text-center mb-10">
					Stay plugged with Cyberstick, a smarter life to your TV.
				</p>
				<button className="rounded-md bg-linear-to-r from-pink-500 via-purple-800 to-purple-900 px-10 py-3 mb-7 md:max-w-[320px] w-full text-lg font-medium text-white">
					Buy Now
				</button>
			</div>
			</div>
		</div>
	);
};

export default Hero;

// import React from "react";
// import Drive from "../assets/cyberstick_drive.svg";
// import Remote from "../assets/cyberstick_remote.svg";

// const Hero = () => {
// 	return (
// 		<div className="hero-bg">
// 			<div className="m-auto w-[90%] flex flex-col md:flex-row justify-between py-10 md:py-20 shadow-xl items-center md:items-end">
// 				{/* Text */}
// 				<div className="text-center md:text-left mb-8 md:mb-0 max-w-md">
// 					<h1 className="text-gray-100 text-4xl md:text-7xl pb-2 md:pb-2">
// 						Think Beyond Smart
// 					</h1>
// 					<h1 className="bg-gradient-to-r from-pink-500 via-purple-800 to-purple-900 bg-clip-text text-transparent text-4xl md:text-7xl mb-3">
// 						Think Cyberstick
// 					</h1>
// 					<p className="text-gray-300 text-md md:text-lg mb-6 md:mb-10">
// 						A multi purpose smart device that converts any display to a smart TV
// 					</p>

// 					<button className="rounded-md bg-gradient-to-r from-pink-500 via-purple-800 to-purple-900 px-10 py-3 w-full md:w-80 text-lg font-medium text-white">
// 						Buy Now
// 					</button>
// 				</div>

// 				{/* Images */}
// 				<div className="flex items-center md:items-end gap-4">
// 					<img src={Drive} className="w-40 md:w-auto" alt="Cyberstick Drive" />
// 					<img
// 						src={Remote}
// 						className="w-32 md:w-auto"
// 						alt="Cyberstick Remote"
// 					/>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Hero;

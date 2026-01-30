import React from "react";

const Hero1 = () => {
	return (
		<div className="bg-black h-screen">
			<div className="flex flex-col items-center py-2 ">
				<h1 className="text-7xl text-gray-100 w-[768px] text-center py-6">
					<span className="bg-linear-to-r from-pink-500 via-purple-800 to-purple-900 bg-clip-text text-transparent mr-5">
						Unlock
					</span>
					A Whole New World Of Content
				</h1>
				<p className="text-gray-300 text-center mb-10">
					Stay plugged with Cyberstick, a smarter life to your TV.
				</p>
				<button className="rounded-md bg-linear-to-r from-pink-500 via-purple-800 to-purple-900 px-10 py-3 w-80 max-w-7xl text-lg font-medium text-white">
					Buy Now
				</button>
			</div>
		</div>
	);
};

export default Hero1;

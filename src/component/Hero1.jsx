import React from "react";

const Hero1 = () => {
	return (
		<div className="bg-black h-screen md:min-h-screen">
			<div className="flex flex-col items-center pt-8 px-4 ">
				<h1 className="md:text-7xl text-2xl text-gray-100 md:max-w-3xl text-center py-6">
					<span className="bg-linear-to-r from-pink-500 via-purple-800 to-purple-900 bg-clip-text text-transparent mr-5">
						Unlock
					</span>
					A Whole New World Of Content
				</h1>
				<p className="text-stone-300 text-center mb-10">
					Stay plugged with Cyberstick, a smarter life to your TV.
				</p>
				<button className="rounded-md bg-linear-to-r from-pink-500 via-purple-800 to-purple-900 px-10 py-3 md:max-w-[320px] w-full text-lg font-medium text-white">
					Buy Now
				</button>
			</div>
		</div>
	);
};

export default Hero1;

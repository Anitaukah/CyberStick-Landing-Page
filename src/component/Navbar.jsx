import React from "react";
import Logo from "../assets/cyberstick_logo.png";
import Cart from "../assets/cart.png";

const Navbar = () => {
	return (
		<nav className=" bg-zinc-950">
			<div className="w-[90%] mx-auto max-w-7xl px-6">
				<div className="flex h-16 items-center justify-between">
					{/* Logo */}

					<div className="hidden md:flex items-center space-x-10">
						<img src={Logo} />
						<a href="#overview" className="text-sm text-white">
							Overview
						</a>
						<a href="#services" className="text-sm text-white ">
							FAQ
						</a>
					</div>

					{/* CTA Button */}
					<div className="flex items-center space-x-10 ">
						<button className="bg-linear-to-r from-pink-500 via-purple-800 to-purple-900 px-10 py-2 text-xs font-medium text-white hover:bg-gray-200 transition">
							Buy Now
						</button>

						<img src={Cart} alt="" />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

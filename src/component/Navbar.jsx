// import React from "react";
// import Logo from "../assets/cyberstick_logo.png";
// import Cart from "../assets/cart.png";

// const Navbar = () => {
// 	return (
// 		<nav className=" bg-zinc-950">
// 			<div className="w-[90%] mx-auto max-w-7xl px-6">
// 				<div className="flex h-16 items-center justify-between">
// 					{/* Logo */}

// 					<div className="hidden md:flex items-center space-x-10">
// 						<img src={Logo} />
// 						<a href="#overview" className="text-sm text-white">
// 							Overview
// 						</a>
// 						<a href="#services" className="text-sm text-white ">
// 							FAQ
// 						</a>
// 					</div>

// 					{/* CTA Button */}
// 					<div className="flex items-center space-x-10 ">
// 						<button className="bg-linear-to-r from-pink-500 via-purple-800 to-purple-900 px-10 py-2 text-xs font-medium text-white hover:bg-gray-200 transition">
// 							Buy Now
// 						</button>

// 						<img src={Cart} alt="" />
// 					</div>
// 				</div>
// 			</div>
// 		</nav>
// 	);
// };

// export default Navbar;

import React, { useState } from "react";
import Logo from "../assets/cyberstick_logo.png";
import Cart from "../assets/Cart.png";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav className="bg-zinc-950 sticky top-0 z-50">
			<div className="w-[90%] mx-auto max-w-7xl px-6">
				<div className="flex h-16 items-center justify-between">
					{/* Logo + Desktop Links */}
					<div className="flex items-center space-x-10">
						<img src={Logo} alt="Cyberstick logo" className="h-8" />

						<div className="hidden md:flex items-center space-x-10">
							<a href="#overview" className="text-sm text-white">
								Overview
							</a>
							<a href="#services" className="text-sm text-white">
								FAQ
							</a>
						</div>
					</div>

					{/* Right Section */}
					<div className="flex items-center space-x-6">
						{/* Desktop-only CTA + Cart */}
						<div className="hidden md:flex items-center space-x-6">
							<button className="bg-gradient-to-r from-pink-500 via-purple-800 to-purple-900 px-6 py-2 text-xs font-medium text-white transition hover:opacity-90">
								Buy Now
							</button>

							<img
								src={Cart}
								alt="Shopping cart"
								className="h-6 w-6 cursor-pointer"
							/>
						</div>

						{/* Mobile Hamburger */}
						<button
							className="md:hidden text-white text-2xl"
							onClick={() => setMenuOpen(!menuOpen)}
						>
							☰
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{menuOpen && (
				<div className="md:hidden bg-zinc-950 border-t border-zinc-800">
					<div className="flex flex-col px-6 py-4 space-y-5">
						<a
							href="#overview"
							className="text-white text-sm"
							onClick={() => setMenuOpen(false)}
						>
							Overview
						</a>

						<a
							href="#services"
							className="text-white text-sm"
							onClick={() => setMenuOpen(false)}
						>
							FAQ
						</a>

						<a
							href="#cart"
							className="text-white text-sm flex items-center justify-between"
							onClick={() => setMenuOpen(false)}
						>
							Cart
						</a>
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;

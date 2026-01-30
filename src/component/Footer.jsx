import React from "react";
import Logo from "../assets/cyberstick_logo.png";

const Footer = () => {
	return (
		<div className="bg-black">
			<div className="m-auto w-[90%]">
				<div className="py-24 grid grid-cols-4 text-gray-300">
					<img src={Logo} className="" alt="" />
					<div className="">
						<h1 className="text-white font-semibold text-sm">CONTACT US</h1>
						<p className="text-gray-400 text-xs">(+234)908 899 9099</p>
						<p className="text-gray-400 text-xs">Support@Cyberstick.io</p>
					</div>
					<div className="">
						<h1 className="text-white font-semibold text-sm">SOCIALS</h1>
						<p className="text-gray-400 text-xs">Instagram</p>
						<p className="text-gray-400 text-xs">Twitter</p>
						<p className="text-gray-400 text-xs">Facebook</p>
						<p className="text-gray-400 text-xs">Youtube</p>
					</div>
					<div className="">
						<h1 className="text-white font-semibold text-sm">INFORMAION</h1>
						<p className="text-gray-400 text-xs">Terms and Conditions</p>
						<p className="text-gray-400 text-xs">Privacy Policy</p>
					</div>
				</div>

				<div className="border-2 border-t-gray-700">
					<p className="text-gray-400 my-24 text-center text-xs">
						Copyright &#169; 2025 Cyberstick <span>TM</span>, All right
						reserved.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;

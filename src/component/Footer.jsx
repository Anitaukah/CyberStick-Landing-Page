import React from "react";
import Logo from "../assets/cyberstick_logo.png";

const Footer = () => {
	return (
		<div className="bg-black">
			<div className="mx-auto py-8 w-[90%] md:w-[90%] md:py-12">
				<div className="md:py-24 grid grid-cols-2 gap-y-8 md:gap-8 md:grid-cols-4 text-gray-300">
					<img
						src={Logo}
						className="col-span-2 w-24 md:col-span-1 md:w-28"
						alt=""
					/>
					<div className="">
						<h1 className="text-[10px] text-white font-semibold tracking-wide md:text-sm">
							CONTACT US
						</h1>
						<p className="mt-2 text-[11px] text-gray-400 md:text-xs">
							(+234)908 899 9099
						</p>
						<p className="mt-2 text-[11px] text-gray-400 md:text-xs">
							Support@Cyberstick.io
						</p>
					</div>
					<div className="justify-self-end md:justify-self-auto">
						<h1 className="text-[10px] text-white font-semibold tracking-wide md:text-sm">
							SOCIALS
						</h1>
						<p className="mt-2 text-[11px] text-gray-400 md:text-xs">
							Instagram
						</p>
						<p className="mt-2 text-[11px] text-gray-400 md:text-xs">Twitter</p>
						<p className="mt-2 text-[11px] text-gray-400 md:text-xs">
							Facebook
						</p>
						<p className="mt-2 text-[11px] text-gray-400 md:text-xs">Youtube</p>
					</div>
					<div className="">
						<h1 className="text-[10px] text-white font-semibold tracking-wide md:text-sm">
							INFORMAION
						</h1>
						<p className="mt-2 text-[11px] text-gray-400 md:text-xs">
							Terms and Conditions
						</p>
						<p className="mt-2 text-[11px] text-gray-400 md:text-xs">
							Privacy Policy
						</p>
					</div>
				</div>

				<div className="border-2 border-t-gray-700 pt-8 mt-5 ">
					<p className="text-gray-400 my- text-center md:text-xs text-[10px]">
						Copyright &#169; 2025 Cyberstick <span>TM</span>, All right
						reserved.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;

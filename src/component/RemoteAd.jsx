import React from "react";
import Ellipse from "../assets/Ellipse 18.svg";
import Remote from "../assets/Mask group (1).svg";
import Cyberstick from "../assets/Mask group (2).svg";
import WifiOff from "../assets/Frame 34.svg";
import Play from "../assets/Frame 37.svg";
import Setting from "../assets/Group.svg";
import Bluetooth from "../assets/Frame 41.svg";
import Portable from "../assets/Frame 40.svg";
import Storage from "../assets/Frame 35.svg";
import WifiOn from "../assets/Frame 36.svg";
import Fun from "../assets/Frame 39.svg";

const RemoteAd = () => {
	return (
		<div className="bg-black">
			<div className=" text-gray-200 m-auto w-[90%]">
				<div className="text-center">
					<h3 className="text-7xl pt-7">
						<span className=" bg-linear-to-r from-pink-500 via-purple-800 to-purple-900 bg-clip-text text-transparent mr-2">
							CyberStick
						</span>
						Remote
					</h3>
					<p className="text-4xl -indent-[300px] mt-5">With Air Mouse</p>
				</div>

				<div className="flex justify-center gap-x-52">
					<div className="flex flex-col self-center gap-3 w-72">
						<div className="flex">
							<img src={Ellipse} alt="" />
							<p className="ml-5">Voice Control with Google voice assistant</p>
						</div>
						<div className="flex">
							<img src={Ellipse} alt="" />
							<p className="ml-5">Air mouse Enabled</p>
						</div>
						<div className="flex">
							<img src={Ellipse} alt="" />
							<p className="ml-5">2.4G Wireless Connection</p>
						</div>
						<div className="flex">
							<img src={Ellipse} alt="" />
							<p className="ml-5">Built in Gyroscope</p>
						</div>
					</div>

					<div>
						<img src={Remote} className="w-32" alt="" />
					</div>
				</div>
				<h1 className="text-5xl text-center mt-16">
					Cutting Edge <span className="text-purple-700 ">Features</span>
				</h1>

				<div className="grid grid-cols-4 mt-10">
					<div className="h-full">
						<div className=" mb-15 flex flex-col items-start rounded-2xl bg-linear-to-t from-stone-950 via-stone-950 to-stone-800 drop-shadow-md w-70 p-8 ">
							<img src={WifiOff} alt="" className="w-auto h-auto -mt-15 mb-3" />
							<h1 className="text-2xl">Offline Mode</h1>
							<p className="text-neutral-400 text-sm">
								Download and save content to watch later
							</p>
						</div>
						<div className="mb-15 flex flex-col items-start rounded-2xl bg-linear-to-t from-stone-950 via-stone-950 to-stone-800 drop-shadow-md w-70 p-8 ">
							<img src={Play} alt="" className="w-auto h-auto -mt-15 mb-3" />
							<h1>Full Android Play Store</h1>
							<p className="text-neutral-400">
								Access to several Android applications
							</p>
						</div>
						<div className="mb-5 flex flex-col items-start rounded-2xl bg-linear-to-t from-stone-950 via-stone-950 to-stone-800 drop-shadow-md w-70 p-8 ">
							<img src={Setting} alt="" className="w-auto h-auto -mt-15 mb-3" />
							<h1>Productivity</h1>
							<p className=" text-neutral-400 text-base">
								Access to Google Workspace tools
							</p>
						</div>
					</div>
					<div className=" col-span-2 ">
						<div className="mask-b-from-70% mask-b-to-100%">
							<img
								src={Cyberstick}
								alt=""
								className="w-[500px] place-self-center "
							/>
						</div>
						<div className="flex gap-6">
							<div className="mt-10 flex flex-col items-start rounded-2xl bg-linear-to-t from-stone-950 via-stone-950 to-stone-800 drop-shadow-md w-70 p-8 ">
								<img
									src={Bluetooth}
									alt=""
									className="w-auto h-auto -mt-15 mb-3"
								/>
								<h1>Bluetooth Connectivity</h1>
								<p className=" text-neutral-400 text-sm">
									Sync all Bluetooth accessories including speakers gamepads
									keyboards and more
								</p>
							</div>
							<div className="mt-10 flex flex-col items-start rounded-2xl bg-linear-to-t from-stone-950 via-stone-950 to-stone-800 drop-shadow-md w-70 p-8 ">
								<img
									src={Portable}
									alt=""
									className="w-auto h-auto -mt-15 mb-3"
								/>
								<h1>Portability</h1>
								<p className=" text-neutral-400 text-sm">
									Light weight pocket sized smart device
								</p>
							</div>
						</div>
					</div>
					<div className="">
						<div className="mb-15 flex flex-col items-start rounded-2xl bg-linear-to-t from-stone-950 via-stone-950 to-stone-800 drop-shadow-md w-70 p-8 ">
							<img src={Storage} alt="" className="w-auto h-auto -mt-15 mb-3" />
							<h1>Storage</h1>
							<p className="text-neutral-400 text-sm">
								16gig Onboard memory and USB port for external hard drive.
								External memory card slot which allows expansion of internal
								memory
							</p>
						</div>
						<div className="mb-15 flex flex-col items-start rounded-2xl bg-linear-to-t from-stone-950 via-stone-950 to-stone-800 drop-shadow-md w-70 p-8 ">
							<img src={WifiOn} alt="" className="w-auto h-auto -mt-15 mb-3" />
							<h1>Wifi Connectivity</h1>
							<p className=" text-neutral-400 text-sm">
								Connect to a wireless network and access the internet
							</p>
						</div>
						<div className="mb-5 flex flex-col items-start rounded-2xl bg-linear-to-t from-stone-950 via-stone-950 to-stone-800 drop-shadow-md w-70 p-8 ">
							<img src={Fun} alt="" className="w-auto h-auto -mt-15 mb-3" />
							<h1>Entertainment</h1>
							<p className=" text-neutral-400 text-sm">
								Enable users to access an endless supply of content including
								Netflix, Youtube live, sports showmax and more
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RemoteAd;

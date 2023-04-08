import React from "react";

const Header = () => {
	return (
		<>
			<header id="Header" className="container mx-auto relative 2xl:block xl:block lg:block md:hidden sm:hidden hidden">
				<div className="grid grid-cols-12 py-10 absolute place-content-center w-full">
					<div className="col-span-3 flex items-center">
						<p className="text-3xl font-tetra">Legacy Homes</p>
					</div>
					<div className="col-span-6 flex items-center justify-center">
						<nav className="flex justify-center font-worksans text-[14px]">
							<ul className="flex">
								<li className="mx-4">
									<a href="/">Home</a>
								</li>
								<li className="mx-4">
									<a href="/">Services</a>
								</li>
								<li className="mx-4">
									<a href="/">Properties</a>
								</li>
								<li className="mx-4">
									<a href="/">About Us</a>
								</li>
								<li className="mx-4">
									<a href="/">Contact Us</a>
								</li>
							</ul>
						</nav>
					</div>
					<div className="col-span-3 flex items-center justify-center">
						<div className="flex justify-end font-bold text-[14px]">
							<button className="bg-primary text-black font-worksans py-2 px-4 rounded underline">
								Sign In
							</button>

							<button className="bg-primary text-white font-worksans py-2 px-4 rounded ml-4 bg-black">
								Sign Up
							</button>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;

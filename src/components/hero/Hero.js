import React from "react";
import HeroImg from "../../assets/media/HeroImg.png";

const Hero = () => {
	return (
		<div className="h-screen container mx-auto py-24">
			<div className="grid grid-cols-12 h-full">
				<div className="col-span-7 h-full  z-10">
					<div className="flex flex-col h-full justify-center">
						<div className="text-[56px] font-cabinet font-black">
							Easiest way to find your
							<br />
							<span className="text-[90px]">DREAM PLACE</span>
						</div>

						<div className="text-[18px] font-worksans mt-4 pr-10">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s....
						</div>

						<div className="bg-white h-32 w-[845px] my-10">
							<div className="flex justify-between items-center h-full container mx-auto">
								<div className="flex items-center ">
									<div className=" px-8">
										<p className="font-worksans">
											<p className="text-sm">Property Type</p>
											<p className="text-xl font-bold">Long Terms</p>
											{/* <input
												type="text"
												className="outline-none text-xl font-bold border-none w-auto"
												value="Long Terms"
											/> */}
										</p>
									</div>
									<div className="bg-[#8e8e8e] h-8 w-[1px] border-rounded"></div>
									<div className=" px-8">
										<p className="font-worksans">
											<p className="text-sm">Property Status</p>
											<p className="text-xl font-bold">Rent</p>
											{/* <input
												type="text"
												className="outline-none text-xl font-bold border-none w-auto"
												value="Property Status"
											/> */}
										</p>
									</div>
									<div className="bg-[#8e8e8e] h-8 w-[1px] border-rounded"></div>
									<div className=" px-8">
										<p className="font-worksans">
											<p className="text-sm">Type</p>
											<p className="text-xl font-bold">Fully Furnished</p>
											{/* <input
												type="text"
												className="outline-none text-xl font-bold border-none w-auto"
												value="Fully Furnished"
											/> */}
										</p>
									</div>
									<div className="bg-[#8e8e8e] h-8 w-[1px] border-rounded"></div>
									<div className=" px-8">
										<p className="font-worksans w-fit">
											<p className="text-sm">Location</p>
											<p className="text-xl font-bold">USA</p>
											{/* <input
												type="text"
												className="outline-none text-xl font-bold border-none w-auto"
												value="USA"
											/> */}
										</p>
									</div>
									<div className="bg-[#8e8e8e] h-8 w-[1px] border-rounded"></div>
									<div className="bg-black h-20 w-20 flex items-center justify-center ml-8">
										<i className="fas fa-search text-white text-3xl"></i>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-5 flex items-center z-0">
					<img src={HeroImg} alt="" className="" />
				</div>
			</div>
		</div>
	);
};

export default Hero;

import React from "react";
import PropertyImg1 from "../../assets/media/PropertyImg1.png";
import PropertyImg2 from "../../assets/media/PropertyImg2.png";
import PropertyImg3 from "../../assets/media/PropertyImg3.png";
import LocationIcon from "../../assets/media/LocationIcon.png";

function PropertyCard(props) {
	return (
		<div className="w-full h-full border-[1px] border-black flex flex-col gap-y-4 pb-4">
			<div className="img">
				<img src={props.img} alt="" className="w-full" />
			</div>
			<div className="text px-4 flex-col flex gap-y-3">
				<div className="text-[18px] font-medium font-worksans">
					1 Bedroom Apartment with No Commission Free Bills and Parking with
					Tawtheeq
				</div>

				<div className="text-base font-worksans flex flex-row">
					<img src={LocationIcon} alt="" />
					<div className="ml-2">Palika Market, Delhi</div>
				</div>

				<div className="price text-base font-bold font-worksans">
					Rs. 2,000,000/year
				</div>

				<div className="properties font-worksans font-light">
					<div className="flex flex-col">
						<div className="flex flex-row justify-between">
							<div className="PropName">Area (sqft)</div>
							<div className="PropValue">920</div>
						</div>
						<div className="flex flex-row justify-between">
							<div className="PropName">Bedrooms</div>
							<div className="PropValue">1</div>
						</div>
						<div className="flex flex-row justify-between">
							<div className="PropName">Bathrooms</div>
							<div className="PropValue">1</div>
						</div>
					</div>
				</div>

				<div className="btnLearn">
					<button className="w-full bg-[#1c1c1c] text-[#fff] py-5 font-light tracking-wider text-[14px]">
						VIEW DETAILS
					</button>
				</div>
			</div>
		</div>
	);
}

const Property = () => {
	return (
		<section className="container mx-auto mt-[102px]">
			<div className="text-7xl text-center font-cabin font-bold">PROPERTY</div>
			<div className="grid grid-cols-12">
				<div className="col-span-1"></div>
				<div className="col-span-10">
					<p className="text-base font-worksans text-center mt-4 text-[#5c5c5c]">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s....
					</p>
				</div>
				<div className="col-span-1"></div>
			</div>

			<div className="grid grid-cols-3 gap-x-8 mt-[42px]">
				<PropertyCard img={PropertyImg1} />
				<PropertyCard img={PropertyImg2} />
				<PropertyCard img={PropertyImg3} />
			</div>
		</section>
	);
};

export default Property;

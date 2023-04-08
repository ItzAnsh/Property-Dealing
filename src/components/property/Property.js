import React from "react";
import PropertyImg1 from "../../assets/media/PropertyImg1.png";
import PropertyImg2 from "../../assets/media/PropertyImg2.png";
import PropertyImg3 from "../../assets/media/PropertyImg3.png";
import LocationIcon from "../../assets/media/LocationIcon.png";
import Heading from "../Heading/Heading";

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
		<section className="container mx-auto mt-[102px] py-16">
			<Heading title="Property" />

			<div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 2xl:gap-x-8 xl:gap-x-8 lg:gap-x-8 md:gap-x-8 sm:gap-x-0 gap-x-0 2xl:gap-y-0 xl:gap-y-0 lg:gap-y-0 md:gap-y-0 sm:gap-y-4 gap-y-4 mt-[42px]">
				<PropertyCard img={PropertyImg1} />
				<PropertyCard img={PropertyImg2} />
				<PropertyCard img={PropertyImg3} />
			</div>
		</section>
	);
};

export default Property;

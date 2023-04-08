import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import Service1 from "../../assets/media/Service1.svg";
import Service2 from "../../assets/media/Service2.svg";
import Service3 from "../../assets/media/Service3.svg";
import Service4 from "../../assets/media/Service4.svg";
import Service5 from "../../assets/media/Service5.svg";
import Service6 from "../../assets/media/Service6.svg";

import "./style.css";

const Card = (props) => {
	const [hover, setHover] = useState(false);

	/* if (hover === true) {
		document.querySelector("#Plumber").style = "fill: #fff";
	} */
	return (
		<div
			className={`flex flex-col items-center border-2 h-[412px] justify-center px-10 border-[#1c1c1c] ${
				hover === true ? "bg-[#1c1c1c] text-[#fff]" : "bg-white text-[#5c5c5c]"
			}`}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<ReactSVG
				src={props.svg}
				className="ServiceSvg"
				fill={hover === true ? "#fff" : "#1c1c1c"}
			/>
			<p className="text-3xl font-cabin font-bold mt-4">{props.title}</p>
			<p className="text-base font-worksans text-center mt-4">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s....
			</p>
		</div>
	);
};

const Services = () => {
	return (
		<div>
			<section id="Services" className="container mx-auto relative mt-[102px]">
				<div className="grid grid-cols-12">
					<div className="col-span-1"></div>
					<div className="col-span-10">
						<p className="text-7xl font-cabin text-center font-bold">
							SERVICES
						</p>
						<p className="text-base font-worksans text-center mt-4 text-[#5c5c5c]">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s....
						</p>
					</div>
					<div className="col-span-1"></div>
				</div>

				<div className="grid grid-cols-12 gap-y-10 gap-x-5 pt-10">
					<div className="col-span-4">
						<Card svg={Service1} title={"PLUMBER"} />
					</div>
					<div className="col-span-4">
						<Card svg={Service2} title={"PAINTING"} />
					</div>
					<div className="col-span-4">
						<Card svg={Service3} title={"LOGISTICS"} />
					</div>
					<div className="col-span-4">
						<Card svg={Service4} title={"CLEANING"} />
					</div>
					<div className="col-span-4">
						<Card svg={Service5} title={"FURNITURES"} />
					</div>
					<div className="col-span-4">
						<Card svg={Service6} title={"MORE THEN"} />
					</div>
				</div>
			</section>
		</div>
	);
};

export default Services;

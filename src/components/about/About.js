import React from "react";
import AboutImg from "../../assets/media/AboutUs.png";

const About = () => {
	return (
		<section id="about" className="container mx-auto mt-[102px]">
			<div className="grid grid-cols-12">
				<div className="col-span-6 flex flex-col items-start justify-center flex-wrap gap-y-16">
					<h2 className="text-6xl font-bold font-cabin">ABOUT US</h2>
					<p className="text-base font-worksans pr-24">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum.
					</p>

					<button className="learnButton bg-[#1c1c1c] px-4 py-5 font-thin text-white">
						LEARN MORE
					</button>
				</div>
				<div className="col-span-6 flex items-center">
					<img src={AboutImg} alt="" className="" />
				</div>
			</div>
		</section>
	);
};

export default About;

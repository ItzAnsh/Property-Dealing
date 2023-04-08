import React from "react";
import AboutImg from "../../assets/media/AboutUs.png";

const About = () => {
	return (
		<section id="about" className="container mx-auto mt-[102px]">
			<div className="grid 2xl:grid-cols-12 xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-6 grid-cols-6">
				<div className="col-span-6 flex flex-col 2xl:items-start xl:items-start lg:items-start md:items-center sm:items-center items-center justify-center flex-wrap gap-y-4 leading-loose">
					<h2 className="text-5xl font-bold font-cabin 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center text-center">ABOUT US</h2>
					<p className="text-base font-worksans 2xl:pr-24 xl:pr-24 lg:pr-24 md:pr-0 sm:pr-0 pr-0 leading-loose 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center text-center">
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
				<div className="col-span-6 flex items-center 2xl:block xl:block lg:block md:hidden sm:hidden hidden">
					<img src={AboutImg} alt="" className="" />
				</div>
			</div>
		</section>
	);
};

export default About;

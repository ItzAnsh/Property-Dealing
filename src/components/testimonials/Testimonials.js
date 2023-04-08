import React from "react";
import Heading from "../Heading/Heading";
import TestimonialSectionLeft from "../../assets/media/testLeft.png";
import TestimonialSectionRight from "../../assets/media/testRight.png";
import TestimonialSectionCenter from "../../assets/media/testCenter.png";

export default function Testimonials() {
  return (
    <div className="pt-16 container mx-auto">
      <Heading title="Client Testimonials" />

      <div className="flex gap-x-8 mt-[42px]">
        <div className="relative h-[100px] w-[100px]">
          <img src={TestimonialSectionLeft} alt="" className="z-10 absolute"/>
          <div className="bg-[#000000] absolute w-full h-full opacity-50 z-20"></div>
        </div>
        <div className="relative h-[100px] w-[100px]">
          <img src={TestimonialSectionCenter} alt="" className="z-10 absolute"/>
        </div>
        <div className="relative h-[100px] w-[100px]">
          <img src={TestimonialSectionRight} alt="" className="z-10 absolute"/>
          <div className="bg-[#000000] absolute w-full h-full opacity-50 z-20"></div>
        </div>
      </div>
    </div>
  );
}

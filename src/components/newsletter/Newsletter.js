import React from "react";
import ArrowIcon from "../../assets/media/arrowIcon.svg";

export default function Newsletter() {
  return (
    <section className='bg-[url("./assets/media/newsletterBg.png")] bg-cover py-16'>
      <div className="grid grid-cols-2 container mx-auto">
        <div className="col-span-1"></div>
        <div className="col-span-1 flex flex-col items-start pt-64">
          <div className="text-6xl font-worksans font-bold text-[#f0f0f0]">
            Get Our Monthly
            <br />
            Newsletter
          </div>

          <div className="text-base font-worksans mt-4 text-[#f0f0f0] ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </div>

          <div className="w-full mt-4">
            <div className="grid grid-cols-12">
              <div className="col-span-10">
                <input
                  type="text"
                  className="w-full h-12 px-4 py-9 bg-[#4a4a4a] outline-none text-white placeholder:text-white font-worksans"
                  placeholder="Input your emaill address in here"
                />
              </div>
              <div className="col-span-2 bg-[#fff]">
                <button className="w-full h-full bg-[#fff] text-white font-worksans flex items-center justify-center">
                  <img src={ArrowIcon} alt="arrowIcon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

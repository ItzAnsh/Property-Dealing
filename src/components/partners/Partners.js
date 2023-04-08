import React from "react";

export default function Partners() {
  return (
    <div className='bg-contain 2xl:bg-[url("./assets/media/partnersBg.png")] xl:bg-[url("./assets/media/partnersBg.png")] lg:bg-[url("./assets/media/partnersBg.png")] md:bg-none sm:bg-none bg-none bg-no-repeat bg-right py-12'>
      <section className="container mx-auto">
        <div className="grid 2xl:grid-cols-12 xl:grid-cols-12 lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-6 grid-cols-6 container mx-auto 2xl:h-[70vh] xl:h-[70vh] lg:h-[60vh] md:h-fit sm:h-fit h-fit">
          <div className="col-span-6 flex flex-col justify-center items-center">
            <div className="text-6xl font-cabin font-bold">PARTNERS</div>
            <div className="text-base font-worksans mt-4 text-[#5c5c5c] 2xl:text-left xl:text-left lg:text-left md:text-center sm:text-center text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
            <div className="mt-4">
              <h1 className="text-3xl font-bold font-cabin leading-tight h-fit 2xl:ttext-left xl:text-left lg:text-left md:text-center sm:text-center text-center">
                MOHANAD EATON
                <p className="text-base font-worksans mt-4 font-light text-[#5c5c5c]">
                  co-founder
                </p>
              </h1>

            <div className="flex gap-x-4 mt-4">
              <button className="learnButton bg-[#f0f0f0] h-[56px] w-[123px] font-thin text-[#1c1c1c] border-black border-[1px]">
                PREVIOUS
              </button>
              <button className="learnButton bg-[#1c1c1c] h-[56px] w-[123px] font-thin text-[#fff] border-black border-[1px]">
                NEXT
              </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

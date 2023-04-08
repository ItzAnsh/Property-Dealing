import React from "react";
import Heading from "../Heading/Heading";
import workSection1 from "../../assets/media/workSection1.svg";
import workSection2 from "../../assets/media/workSection2.svg";
import workSection3 from "../../assets/media/workSection3.svg";
import workSection4 from "../../assets/media/workSection4.svg";
import workSection5 from "../../assets/media/workSection5.svg";
import workSection6 from "../../assets/media/workSection6.svg";

function Card(props) {
  return (
    <div className="card flex flex-col items-center">
      <div className="card-image">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="card-content px-20">
        <h3 className="text-4xl font-cabin font-bold text-center">
          {props.title}
        </h3>
        <p className="text-xl text-center font-worksans text-[#5c5c5c]">
          {props.description}
        </p>
      </div>
    </div>
  );
}

const Works = () => {
  return (
    <section id="Works" className="container mx-auto px-4 py-16">
      <Heading title="How it works" />

      <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 mt-7">
        <div className="2xl:border-r-2 xl:border-r-2 lg:border-r-2 md:border-r-2 sm:border-r-0 border-r-0 2xl:border-b-2 xl:border-b-2 lg:border-b-2 md:border-b-2 sm:border-b-0 border-b-0 pb-24">
          <Card
            image={workSection1}
            title="Looking for Tenant?"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nunc est ultricies nunc, vel ultricies nisl nunc vel nisl. "
          />
        </div>
        <div className="2xl:border-b-2 xl:border-b-2 lg:border-b-2 md:border-b-2 sm:border-b-0 border-b-0">
          <Card
            image={workSection2}
            title="A Dedicated"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nunc est ultricies nunc, vel ultricies nisl nunc vel nisl. "
          />
        </div>
        <div className="2xl:border-r-2 xl:border-r-2 lg:border-r-2 md:border-r-2 sm:border-r-0 border-r-0 2xl:border-b-2 xl:border-b-2 lg:border-b-2 md:border-b-2 sm:border-b-0 border-b-0 py-24">
          <Card
            image={workSection3}
            title="Looking for Tenant?"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nunc est ultricies nunc, vel ultricies nisl nunc vel nisl. "
          />
        </div>
        <div className="2xl:border-b-2 xl:border-b-2 lg:border-b-2 md:border-b-2 sm:border-b-0 border-b-0 py-0">
          <Card
            image={workSection4}
            title="Looking for Tenant?"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nunc est ultricies nunc, vel ultricies nisl nunc vel nisl. "
          />
        </div>
        <div className="2xl:border-r-2 xl:border-r-2 lg:border-r-2 md:border-r-2 sm:border-r-0 border-r-0 py-24">
          <Card
            image={workSection5}
            title="Looking for Tenant?"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nunc est ultricies nunc, vel ultricies nisl nunc vel nisl. "
          />
        </div>
        <div className=" py-24">
          <Card
            image={workSection6}
            title="Looking for Tenant?"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nunc est ultricies nunc, vel ultricies nisl nunc vel nisl. "
          />
        </div>
      </div>
    </section>
  );
};

export default Works;

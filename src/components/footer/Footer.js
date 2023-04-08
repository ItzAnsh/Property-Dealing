import React from "react";
import facebookIcon from "../../assets/media/facebookIcon.svg";
import instaIcon from "../../assets/media/instaIcon.svg";
import twitterIcon from "../../assets/media/twitterIcon.svg";
import ytIcon from "../../assets/media/ytIcon.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer
      id="Footer"
      className="bg-[url('./assets/media/footerBg.png')] bg-cover bg-top bg-no-repeat bg-[#494949] relative z-0"
    >
      <div className="absolute bg-[#1c1c1c] w-full h-full opacity-80 backdrop-grayscale z-0"></div>
      <div className="w-full z-10 backdrop-grayscale py-12">
        <div className="container mx-auto py-16">
          <div className="grid 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 2xl:gap-y-0 xl:gap-y-0 lg:gap-y-0 md:gap-y-4 sm:gap-y-4 gap-y-4">
            <div className="first col-span-2">
              <div className="flex items-start flex-col gap-y-4">
                <div className="font-tetra text-5xl text-[#fff] text-left">
                  LEGACY HOMES
                </div>
                <div className="font-worksans text-sm text-[#fff] font-light pr-12 leading-loose">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </div>
                <div className="icons text-[14px] text-[#fff] font-light mt-4">
                  <div className="flex items-center">
                    <img src={facebookIcon} alt="facebook" />
                    <img src={instaIcon} alt="instagram" className="ml-4" />
                    <img src={twitterIcon} alt="twitter" className="ml-4" />
                    <img src={ytIcon} alt="youtube" className="ml-4" />
                  </div>
                </div>
              </div>
            </div>

            <div className="second 2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-3 sm:col-span-3 col-span-3">
              <div className="flex flex-col">
                <div className="text-2xl text-[#fff] text-left font-bold font-worksans">
                  About
                </div>
                <div className="text-base font-light links text-[#fff] leading-10 py-5">
                  <a href="/">Menu</a>
                  <br />
                  <a href="/">Features</a>
                  <br />
                  <a href="/">News & Blogs</a>
                  <br />
                  <a href="/">Help & Support</a>
                  <br />
                </div>
              </div>
            </div>

            <div className="third col-span-1">
              <div className="flex flex-col">
                <div className="text-2xl text-[#fff] text-left font-bold font-worksans">
                  Company
                </div>
                <div className="text-base font-light links text-[#fff] leading-10 py-5">
                  <a href="/">How we work</a>
                  <br />
                  <a href="/">Terms of service</a>
                  <br />
                  <a href="/">Pricing</a>
                  <br />
                  <a href="/">FAQ</a>
                  <br />
                </div>
              </div>
            </div>

            <div className="fourth 2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-3 sm:col-span-3 col-span-3">
              <div className="flex flex-col">
                <div className="text-2xl text-[#fff] text-left font-bold font-worksans">
                  Contact Us
                </div>
                <div className="text-base font-light links text-[#fff] py-6 leading-tight">
                  <a href="/" className="text-[15px] mt-4">
                    Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,
                    Bangalore-560016
                  </a>
                  <br />
                  <br />
                  <a href="/" className="mt-4">
                    +1 202-918-2132
                  </a>
                  <br />
                  <br />
                  <a href="/" className="mt-4">
                    legacyhomes@mail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import Profs from "../../asset/profs.png";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-[#27115f]">
      <div
        className="items-center w-10/12 grid grid-cols-1 mx-auto overflow-x-hidden sm:grid-cols-1 md:grid-cols-2 md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5"
        data-aos="fade-right"
        data-aos-duration="800"
      >
        <div className="pr-2 md:mb-14 py-14 md:py-0">
          <h1 className="text-3xl font-semibold text-gray-300 xl:text-5xl lg:text-3xl">
            Expert Consultations at Your Fingertips!
          </h1>
          <p className="py-4 text-lg text-gray-300 2xl:py-8 md:py-6 2xl:pr-5">
            Empowering Health, One Consultation at a Time...
          </p>
          <div className="mt-4">
            <a
              href="#contact"
              className="px-5 py-3 text-lg tracking-wider text-white bg-[#C11574] rounded-lg md:px-8 hover:bg-[#931058] group"
            >
              <span>Explore More</span>{" "}
            </a>
          </div>
        </div>

        <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
          <img
            id="heroImg1"
            className="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
            src={Profs}
            alt="Awesome hero page image"
            width="500"
            height="488"
          />
        </div>
      </div>
    </div>
  );
}





import React from "react";
import About from "../../asset/about.jpg";

export default function OurExperts() {
  return (
    <>
      <div className="w-full bg-gray-200 p-20">
        <div className="max-w-[1240px] mx-auto flex flex-wrap items-center justify-center">
          <div className=" flex  md:w-[50%] lg:w-[40%]">
            <div class="h-20 w-20 overflow-hidden rounded-full">
            <img
              className="w-full h-full "
              src={About}
              alt="our practice"
            />
            </div>
            <div class="h-20 w-20 overflow-hidden rounded-full">
            <img
              className="w-full h-full "
              src={About}
              alt="our practice"
            />
            </div>
            <div class="h-20 w-20 overflow-hidden rounded-full">
            <img
              className="w-full h-full "
              src={About}
              alt="our practice"
            />
            </div>
            <div class="h-20 w-20 overflow-hidden rounded-full">
            <img
              className="w-full h-full "
              src={About}
              alt="our practice"
            />
            </div>
          </div>
          <div className="w-full md:w-[50%] lg:w-[60%] text-center md:text-left">
            <p className="text-[#27115f]">OUR EXPERTS</p>
            <h1 className="text-[#27115f] text-5xl font-bold py-2  md:text-4xl sm:text-3xl ">
              Top-class professionals.
            </h1>
            <p className="text-[#27115f] text-xl">
              <br />As top-class health professionals, we are committed to delivering the highest standard of care to our patients. Our dedicated team of experts combines years of experience with cutting-edge medical knowledge to ensure that you receive the best possible treatment. We understand the unique healthcare needs of women and offer comprehensive services tailored to address those needs.
            </p>{" "}
            
            <br />
            <button className="text-white bg-[#C11574] hover:bg-[#890b50] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              View Professionals
            </button>
          </div>
        </div>
        <div>
        </div>
      </div>
    </>
  );
}

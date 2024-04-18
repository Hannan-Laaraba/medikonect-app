import React from "react";

export default function OurExperts() {
  return (
    <>
      <div className="w-full bg-gray-200 p-20">
        <div className="max-w-[1240px] mx-auto flex flex-wrap items-center justify-between">
          <div class="flex gap-10 pr-10 ">
          <div className="md:col-span-2 grid grid-cols-2 gap-20 items-start">
        
            <div
              className="h-36 w-36 overflow-hidden rounded-lg ring-2 ring-gray-700 dark:ring-gray-100"
            >
              <img
                src={`https://loremflickr.com/g/200/200/girl?random`}
                alt={`Expert`}
              />
            </div>
            
            <div
              className="h-36 w-36 overflow-hidden rounded-lg ring-2 ring-gray-700 dark:ring-gray-100"
            >
              <img
                src={`https://loremflickr.com/g/200/200/girl?random`}
                alt={`Expert`}
              />
            </div>
            
            <div
              className="h-36 w-36 overflow-hidden rounded-lg ring-2 ring-gray-700 dark:ring-gray-100"
            >
              <img
                src={`https://loremflickr.com/g/200/200/girl?random`}
                alt={`Expert`}
              />
            </div>
            
            <div
              className="h-36 w-36 overflow-hidden rounded-lg ring-2 ring-gray-700 dark:ring-gray-100"
            >
              <img
                src={`https://loremflickr.com/g/200/200/girl?random`}
                alt={`Expert`}
              />
            </div>
  
        </div>
          </div>
          <div className="w-full md:w-[50%] lg:w-[60%] text-center md:text-left">
            <p className="text-[#27115f]">OUR EXPERTS</p>
            <h1 className="text-[#27115f] text-5xl font-bold py-2  md:text-4xl sm:text-3xl ">
              Top-class professionals.
            </h1>
            <p className="text-[#27115f] text-xl">
              <br />
              As top-class health professionals, we are committed to delivering
              the highest standard of care to our patients. Our dedicated team
              of experts combines years of experience with cutting-edge medical
              knowledge to ensure that you receive the best possible treatment.
              We understand the unique healthcare needs of women and offer
              comprehensive services tailored to address those needs.
            </p>{" "}
            <br />
            <button className="text-white bg-[#C11574] hover:bg-[#890b50] focus:ring-4 focus:ring-blue-300  rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              View Professionals
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}




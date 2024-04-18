import React from "react";
import Provider1 from "../../asset/provider1.jpg";
import Provider2 from "../../asset/provider2.jpg";
import Provider3 from "../../asset/provider3.jpg";
import Provider4 from "../../asset/provider4.jpg";
import { Link } from "react-router-dom";




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
                src={Provider1}
                alt={`Expert`}
                style={{height: "100%"}}
              />
            </div>
            
            <div
              className="h-36 w-36 overflow-hidden rounded-lg ring-2 ring-gray-700 dark:ring-gray-100"
            >
              <img
                src={Provider2}
                alt={`Expert`}
                style={{height: "100%"}}
              />
            </div>
            
            <div
              className="h-36 w-36 overflow-hidden rounded-lg ring-2 ring-gray-700 dark:ring-gray-100"
            >
              <img
                src={Provider3}
                alt={`Expert`}
                style={{height: "100%"}}
              />
            </div>
            
            <div
              className="h-36 w-36 overflow-hidden rounded-lg ring-2 ring-gray-700 dark:ring-gray-100"
            >
              <img
                src={Provider4}
                alt={`Expert`}
                style={{height: "100%"}}
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
             <Link to={'/specialty'}> View Professionals</Link>
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}




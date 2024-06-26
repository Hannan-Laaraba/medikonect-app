import React, { useEffect } from "react";
import Provider1 from "../../asset/provider1.jpg";
import Provider2 from "../../asset/provider2.jpg";
import Provider3 from "../../asset/provider3.jpg";
import Provider4 from "../../asset/provider4.jpg";
import {HashLink as Link } from "react-router-hash-link";




export default function OurExperts() {

useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  return (
    <>
      <div className="w-full bg-gray-200 p-20">
        <div className="max-w-[1240px] mx-auto flex flex-wrap items-center justify-between ">
          <div class="flex gap-10 pr-10 pb-4">
          <div className="grid grid-cols-2 gap-20 items-start">
        
            <div
              className="h-20 w-20 lg:h-36 lg:w-36 overflow-hidden rounded-lg ring-2 ring-gray-700 dark:ring-gray-100"
            >
              <img
                src={Provider1}
                alt={`Expert`}
                style={{height: "100%"}}
              />
            </div>
            
            <div
              className="h-20 w-20 lg:h-36 lg:w-36 overflow-hidden rounded-lg ring-2 ring-gray-700 dark:ring-gray-100"
            >
              <img
                src={Provider2}
                alt={`Expert`}
                style={{height: "100%"}}
              />
            </div>
            
            <div
              className="h-20 w-20 lg:h-36 lg:w-36 overflow-hidden rounded-lg ring-2 ring-gray-700 dark:ring-gray-100"
            >
              <img
                src={Provider3}
                alt={`Expert`}
                style={{height: "100%"}}
              />
            </div>
            
            <div
              className="h-20 w-20 lg:h-36 lg:w-36 overflow-hidden rounded-lg ring-2 ring-gray-700 dark:ring-gray-100"
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
            <h1 className="text-[#27115f] lg:text-5xl font-bold py-2 md:text-4xl text-2xl ">
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
             <Link smooth to={'/specialty#top'}> View Professionals</Link>
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}




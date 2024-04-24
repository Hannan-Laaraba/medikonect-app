import React from "react";
import About from "../../asset/about.jpg";



export default function OurPractice() {
  return (
    <>
      <div className="w-full p-20" id="ourpractice">
        <div className="max-w-[1240px] mx-auto flex flex-wrap items-center justify-center">
          <div className="w-full  md:w-[50%] lg:w-[40%]">
            <img
              className="w-full h-[50%] pr-10"
              src={About}
              alt="our practice"
              style={{ height: "500px" }}
            />
          </div>
          <div className="w-full md:w-[50%] lg:w-[60%] text-center md:text-left">
            <p className="text-[#27115f]">ABOUT MEDIKONECT</p>
            <h1 className="text-[#27115f]  md:text-4xl sm:text-3xl text-3xl font-bold py-2">
              We are committed to revolutionizing
              <br /> <span className="text-center">access to healthcare</span>
            </h1>
            <p className="text-[#27115f]">
              <br /> Our platform connects patients with qualified healthcare
              professionals, ensuring personalized care from the comfort of your
              own home. With just a few taps, you can book consultations with
              experts who specialize in various medical fields, guaranteeing you
              receive the guidance you need, when you need it.
            </p>{" "}
            <br />
            <p className="text-[#27115f]">
              We understand that healthcare is not one-size-fits-all. That's why
              we prioritize comprehensive services tailored to your unique
              needs. Whether it's a routine check-up, preventive care, or
              specialized treatment, our team is dedicated to promoting your
              well-being at every step. We believe in a holistic approach that
              considers not only physical health but also your emotional and
              mental well-being. With our user-friendly platform, we aim to
              empower you to take control of your health journey, making
              informed decisions and receiving the support you deserve.
            </p>
            <br />
            <button className="text-white bg-[#C11574] hover:bg-[#890b50] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Learn More
            </button>
          </div>
        </div>
        <div className="text-6xl pt-10"> 
          <h1 className="text-[#27115f] text-center  p-10 md:text-4xl sm:text-3xl ">
            " Join us in revolutionizing healthcare access and <br/><span className="pt-10">prioritizing your
            health and wellness."</span>
          </h1>
        </div>
      </div>
      
    </>
  );
}

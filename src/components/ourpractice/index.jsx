import React from "react";
import About from "../../asset/about.jpg";

export default function OurPractice() {
  return (
    <>
      <div className="w-full p-10 md:p-20" id="ourpractice">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center  ">
          <div className="w-full pr-8 sm:w-1/3 md:w-1/2 lg:w-2/5">
            <img
              className="w-full h-full object-cover"
              src={About}
              alt="our practice"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-3/5 px-4 md:px-0">
            <p className="text-[#27115f] font-bold">ABOUT MEDIKONECT</p>
            <h1 className="text-[#27115f] text-4xl md:text-5xl font-bold py-2">
              We are committed to revolutionizing
              <br /> <span className="block">access to healthcare</span>
            </h1>
            <p className="text-[#27115f]">
              Our platform connects patients with qualified healthcare
              professionals, ensuring personalized care from the comfort of your
              own home. With just a few taps, you can book consultations with
              experts who specialize in various medical fields, guaranteeing you
              receive the guidance you need, when you need it.
            </p>
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
            <button className="text-white bg-[#C11574] hover:bg-[#890b50] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-4 md:mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">
              Learn More
            </button>
          </div>
        </div>
        <div className="text-center pt-16"> 
          <h1 className="text-[#27115f] text-2xl sm:text-2xl lg:text-6xl">
            "Join us in revolutionizing healthcare access and <br/><span className="block">prioritizing your health and wellness."</span>
          </h1>
        </div>
      </div>
    </>
  );
}

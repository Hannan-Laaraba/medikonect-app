import React from "react";
import Medikonect from "../../asset/medikonect.png";

export default function CallToAction() {
  return (
    <>
      <div className="bg-cover p-5 bg-gray-200">
        <section className="flex flex-col justify-center items-center text-center  p-20">
          <div>
            <img src={Medikonect} class="h-70 " alt="medikonect" />
          </div>
          <div>
            <h1 className="text-[#27115f] font-bold text-6xl  p-10">
              Secure your exclusive health <br />
              <span className="">consultation today!</span>
            </h1>
            <p className="text-[#27115f] text-3xl">
              Your journey to optimal health begins here. Take the first step
              towards a healthier <br />{" "}
              <span>you – consult our health professionals today.</span>
            </p>
          </div>

          <div class="mt-10">
            <a
              href="/userdashboard"
              class="px-5 py-3 text-lg tracking-wider text-white bg-[#C11574] rounded-lg md:px-8 hover:bg-[#931058] group"
            >
              <span>Book Consultation</span>{" "}
            </a>
          </div>
          
        </section>
      </div>
    </>
  );
}

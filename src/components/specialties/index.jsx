import React from "react";

export default function Specialties() {
  return (
    <>
      <div>
        <section className="p-20">
          <div>
            <p>Our Specialties</p>
          </div>
        </section>
        <section class="perspective-1000 cursor-pointer">
          <article class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24 relative transform-style-3d transition-transform duration-700 transform text-white hover:rotate-y-180">
            <img
              src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
              alt="University of Southern California"
              class="absolute inset-0 h-full w-full object-cover backface-hidden absolute w-full h-full inset-0 rotate-y-0"
            />
           
          </article>
          <div class="backface-hidden absolute w-full h-full inset-0 rotate-y-180">
                back
              </div>
        </section>
      </div>
    </>
  );
}

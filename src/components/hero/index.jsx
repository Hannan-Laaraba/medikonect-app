import React from "react";

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-[#27115f]">
      <div class=" items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5" data-aos="fade-right" data-aos-duration="800">
    <div class="pr-2 md:mb-14 py-14 md:py-0">
      <h1 class="text-3xl font-semibold text-gray-400 xl:text-5xl lg:text-3xl">Expert Consultations at Your Fingertips!</h1>
      <p class="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
      Empowering Health, One Consultation at a Time...
      </p>
      <div class="mt-4">
        <a href="#contact" class="px-5 py-3 text-lg tracking-wider text-white bg-blue-500 rounded-lg md:px-8 hover:bg-blue-600 group"><span>Explore More</span> </a>
      </div>
    </div>

    <div class="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
      <img id="heroImg1" class="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0" src="https://img.freepik.com/free-vector/health-professional-team-theme_23-2148509383.jpg?t=st=1713348307~exp=1713351907~hmac=27c5ec70552db506aa58ec3ca622979d79f58fc3f35797ca956a56d49911f7a1&w=740" alt="Awesome hero page image" width="500" height="488"/>
    </div>
  </div>
    </div>
  );
}


// <div>
    //   <div className="relative isolate overflow-hidden bg-[#27115f]">
    //     {/* <div className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]" aria-hidden="true">
    //       <div className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#216918] to-[#30303102] opacity-20" style={{ clipPath: 'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)' }}></div>
    //     </div> */}
    //     <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
    //       <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
            
    //         <div className="mt-24 sm:mt-32 lg:mt-16">
    //           <a href="#" className="inline-flex space-x-6">
    //             <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-gray-8`w  00 ring-1 ring-inset ring-indigo-500/20">What's new</span>
    //             <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
    //               <span>Just shipped v1.0</span>
    //               <svg className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    //                 <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
    //               </svg>
    //             </span>
    //           </a>
    //         </div>
    //         <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">Deploy to the cloud with confidence</h1>
    //         <p className="mt-6 text-lg leading-8 text-gray-300">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
    //         <div className="mt-10 flex items-center gap-x-6">
    //           <a href="#" className="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Get started</a>
    //           <a href="#" className="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></a>
    //         </div>
    //       </div>
    //       <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
    //         <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
    //           <img src="https://img.freepik.com/free-photo/two-african-american-pharmacist-working-drugstore-hospital-pharmacy-african-healthcare_627829-13783.jpg?t=st=1713273809~exp=1713277409~hmac=cd9211b7759535570a6486d03fa2d4329476717e9d17c9e822a7c1b0b6365380&w=740" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

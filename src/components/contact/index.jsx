import React from "react";

export default function Contact() {
  return (
    <>
      <section class="bg-blue-50 " id="contact">
        <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div class="mb-4">
            <div class="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              <p class="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
                Contact
              </p>
              <h2 class="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                Get in Touch
              </h2>
              <p class="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
                In hac habitasse platea dictumst
              </p>
            </div>
          </div>
          <div class="flex items-stretch justify-center">
            <div class="grid md:grid-cols-2">
              <div class="bg-white">
                <div class="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">
                  <div class="text-center">
                    <p class="mt-4 text-sm leading-7 text-gray-500 font-regular">
                      STEPS
                    </p>
                    <h3 class="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
                      How it <span class="text-indigo-600">Works?</span>
                    </h3>
                  </div>

                  <div class="mt-20">
                    <ul class="">
                      <li class=" bg-gray-100 p-5 pb-5 text-center mb-20">
                        <div class="flex flex-col items-center">
                          <div class="flex-shrink-0 relative top-0 -mt-16">
                            <div class="flex items-center justify-center h-14 w-14 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                              1
                            </div>
                          </div>
                          <div class="mt-4">
                            <h4 class="text-lg leading-6 font-semibold text-gray-900">
                              Register by filling out form
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li class=" bg-gray-100 p-5 pb-10 text-center mb-20">
                        <div class="flex flex-col items-center">
                          <div class="flex-shrink-0 relative top-0 -mt-16">
                            <div class="flex items-center justify-center h-14 w-14 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                              2
                            </div>
                          </div>
                          <div class="mt-4">
                            <h4 class="text-lg leading-6 font-semibold text-gray-900">
                              Book an appointment
                            </h4>
                          </div>
                        </div>
                      </li>
                      <li class=" bg-gray-100 p-5 pb-10 text-center mb-20">
                        <div class="flex flex-col items-center">
                          <div class="flex-shrink-0 relative top-0 -mt-16">
                            <div class="flex items-center justify-center h-14 w-14 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                              3
                            </div>
                          </div>
                          <div class="mt-4">
                            <h4 class="text-lg leading-6 font-semibold text-gray-900">
                              Consult with doctor
                            </h4>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card h-fit max-w-6xl p-5 md:p-12" id="form">
                <h2 class="mb-4 text-2xl font-bold dark:text-white">
                  Ready to Get Started?
                </h2>
                <form id="contactForm">
                  <div class="mb-6">
                    <div class="mx-0 mb-1 sm:mb-4">
                      <div class="mx-0 mb-1 sm:mb-4">
                        <label
                          for="name"
                          class="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="text"
                          id="name"
                          autocomplete="given-name"
                          placeholder="Your name"
                          class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                          name="name"
                        />
                      </div>
                      <div class="mx-0 mb-1 sm:mb-4">
                        <label
                          for="email"
                          class="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="email"
                          id="email"
                          autocomplete="email"
                          placeholder="Your email address"
                          class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                          name="email"
                        />
                      </div>
                    </div>
                    <div class="mx-0 mb-1 sm:mb-4">
                      <label
                        for="textarea"
                        class="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <textarea
                        id="textarea"
                        name="textarea"
                        cols="30"
                        rows="5"
                        placeholder="Write your message..."
                        class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                      ></textarea>
                    </div>
                  </div>
                  <div class="text-center">
                    <button
                      type="submit"
                      class="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

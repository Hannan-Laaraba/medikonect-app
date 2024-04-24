import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { providers } from "../specialty";
import Img from "../../asset/img.jpg";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import "./styles.css";

function ProfileDetail() {
  const { id } = useParams();

  const [reviews, setReviews] = useState([]);

    // useEffect(() => {
    //     //fetch from backend
    //     const url = new URL (`${process.env.MEDIKONECT_API}/reviews`);

    //     fetch(url)
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log(data)
    //       // setReviews(data.Reviews);
    //     })
    //     .catch((error) => {
    //       console.error("Error fetching data:", error);
    //     });
    //  },[]);



  // Find the provider with the matching ID
  const provider = providers.find((provider) => provider.id.toString() === id);

  if (!provider) {
    return <div>Provider not found.</div>;
  }

  return (
    <>
      <Navbar />
      <div>
        <div
          className="bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `linear-gradient( rgb(248,212,238), rgba(0, 0, 0, 0)), url(${Img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "40vh",
          }}
        >
          <h2 className="text-[#27115f] text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-bold pt-16 text-center">
            {provider.name}
          </h2>
          <p className="text-[#27115f] text-xl sm:text-2xl md:text-3xl lg:text-5xl  pt-12 text-center">
            {" "}
            {provider.specialty}
          </p>
        </div>

        <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-center p-20">
          <div className="w-full  md:w-[50%] lg:w-[40%]">
            <img
              className="w-[80%] h-[80%] pr-10  rounded-lg"
              src={provider.image}
              alt={provider.name}
            />
            <br />
            <div class="w-full max-w-[72%]  bg-gray-200 border border-gray-200 rounded-lg shadow sm:p-8 ">
              <div class="flow-root">
                <ul role="list" class="divide-y divide-gray-300 ">
                  <li class="py-3 sm:py-4">
                    <h5 class="text-2xl text-center font-bold leading-none text-[#27115f] ">
                      Contact Details
                    </h5>
                  </li>
                  <li class="py-3 sm:py-4">
                    <div class="flex ">
                      <div class="flex-shrink-0"></div>
                      <div class="flex-1 min-w-0 ms-4 text-sm text-[#27115f]">
                        <p className="text-xl font-medium">
                          <i class="fa-solid fa-phone text-[#C11574] pr-3"></i>{" "}
                          Call Us
                        </p>
                        <p>+233 8767970899</p>
                        <br />
                        <p className="text-xl font-medium">
                          <i class="fa-solid fa-envelope text-[#C11574] pr-3"></i>{" "}
                          Email Us
                        </p>
                        <p>help@medikonect.com</p>
                      </div>
                    </div>
                  </li>
                  <li class="py-3 sm:py-4">
                    <div class="flex ">
                      <div class="flex-shrink-0 "></div>
                      <div class="flex-1 min-w-0 ms-4 text-[#27115f]">
                        <p class="text-xl font-medium ">
                          <i class="fa-solid fa-location-dot text-[#C11574] pr-3"></i>
                          MEST Africa
                        </p>
                        <p>No.20 Aluguntugui Street</p>
                        <p>Ambassadorial Enclave</p>
                        <p>East Legon</p>
                        <p>Accra, Ghana</p>
                      </div>
                    </div>
                  </li>
                  <li class="py-3 sm:py-4">
                    <div class="flex items-center ">
                      <div class="flex-shrink-0"></div>
                      <div class="flex-1 min-w-0 ms-4">
                        <Link to="/signin" className="text-white bg-[#C11574] hover:bg-[#890b50] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                          Book Me
                        </Link>
                        <button className="text-white bg-[#C11574] hover:bg-[#890b50] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                          View Fees
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[50%] lg:w-[60%] text-center md:text-left">
            <h1 className="text-[#27115f]  md:text-2xl sm:text-xl text-l py-2">
              I am committed to providing
              <br /> <span className="text-center">you the best service</span>
              <br />
            </h1>
            <p className="text-[#27115f]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              fugit impedit vel sed aperiam, possimus porro quisquam
              voluptatibus quibusdam itaque rerum dolorem facilis quae ullam
              voluptatum vitae, aut voluptates odio?
            </p>
            <br />
            <h1 className="text-[#27115f]  md:text-2xl sm:text-xl font-bold text-l py-2">
              Areas of Expertise
            </h1>
            <div className="p-4 text-[#27115f]  ">
              <ul className="">
                <li className="custom-bullet">Lorem ipsum</li>
                <li className="custom-bullet">Lorem ipsum </li>
                <li className="custom-bullet">Lorem ipsum</li>
                <li className="custom-bullet">Lorem ipsum</li>
                <li className="custom-bullet">Lorem ipsum</li>
              </ul>
            </div>
            <hr className="border-[#27115f] border-solid font-bold" />
            <p className="text-[#27115f] p-4 text-center text-xl font-bold">
              Top Reviews
            </p>
            {reviews.map((data)=>{
              return (
                <>
                  <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="inline-block relative">
                  <div class="relative w-16 h-16 rounded-full overflow-hidden">
                    <img
                      class="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover"
                      src="https://picsum.photos/id/646/200/200"
                      alt="Profile picture"
                    />
                    <div class="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"></div>
                  </div>
                  <svg
                    class="fill-current text-white bg-green-600 rounded-full p-1 absolute bottom-0 right-0 w-6 h-6 -mx-1 -my-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z" />
                  </svg>
                </div>
              </div>
              <div class="ml-6">
                <p class="flex items-baseline">
                  <span class="text-gray-600 font-bold">{data.name}</span>
                  <span class="ml-2 text-green-600 text-xs"></span>
                </p>
                <div class="flex items-center mt-1">
                  <svg
                    class="w-4 h-4 fill-current text-yellow-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <svg
                    class="w-4 h-4 fill-current text-yellow-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <svg
                    class="w-4 h-4 fill-current text-yellow-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <svg
                    class="w-4 h-4 fill-current text-yellow-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <svg
                    class="w-4 h-4 fill-current text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                </div>

                <div class="mt-3">
                  <span class="font-bold">{data.title}</span>
                  <p class="mt-1">
                    {data.description}
                  </p>
                </div>
                <div class="flex items-center justify-between mt-4 text-sm text-gray-600 fill-current">
                  <button class="flex items-center">
                    <svg
                      class="w-3 h-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.08 12.16A2.99 2.99 0 0 1 0 10a3 3 0 0 1 5.08-2.16l8.94-4.47a3 3 0 1 1 .9 1.79L5.98 9.63a3.03 3.03 0 0 1 0 .74l8.94 4.47A2.99 2.99 0 0 1 20 17a3 3 0 1 1-5.98-.37l-8.94-4.47z" />
                    </svg>
                    <span class="ml-2">Share</span>
                  </button>
                  <div class="flex items-center">
                    <span>Was this review helplful?</span>
                    <button class="flex items-center ml-6">
                      <svg
                        class="w-3 h-3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z" />
                      </svg>
                      <span class="ml-2">56</span>
                    </button>
                    <button class="flex items-center ml-4">
                      <svg
                        class="w-3 h-3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M11 20a2 2 0 0 1-2-2v-6H2a2 2 0 0 1-2-2V8l2.3-6.12A3.11 3.11 0 0 1 5 0h8a2 2 0 0 1 2 2v8l-3 7v3h-1zm6-10V0h3v10h-3z" />
                      </svg>
                      <span class="ml-2">10</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
                </>
              )
            })}
            <br />
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="inline-block relative">
                  <div class="relative w-16 h-16 rounded-full overflow-hidden">
                    <img
                      class="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover"
                      src="https://picsum.photos/id/646/200/200"
                      alt="Profile picture"
                    />
                    <div class="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"></div>
                  </div>
                  <svg
                    class="fill-current text-white bg-green-600 rounded-full p-1 absolute bottom-0 right-0 w-6 h-6 -mx-1 -my-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z" />
                  </svg>
                </div>
              </div>
              <div class="ml-6">
                <p class="flex items-baseline">
                  <span class="text-gray-600 font-bold">Mickeymond</span>
                  <span class="ml-2 text-green-600 text-xs"></span>
                </p>
                <div class="flex items-center mt-1">
                  <svg
                    class="w-4 h-4 fill-current text-yellow-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <svg
                    class="w-4 h-4 fill-current text-yellow-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <svg
                    class="w-4 h-4 fill-current text-yellow-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <svg
                    class="w-4 h-4 fill-current text-yellow-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <svg
                    class="w-4 h-4 fill-current text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                </div>

                <div class="mt-3">
                  <span class="font-bold">Sapien consequat eleifend!</span>
                  <p class="mt-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
                <div class="flex items-center justify-between mt-4 text-sm text-gray-600 fill-current">
                  <button class="flex items-center">
                    <svg
                      class="w-3 h-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.08 12.16A2.99 2.99 0 0 1 0 10a3 3 0 0 1 5.08-2.16l8.94-4.47a3 3 0 1 1 .9 1.79L5.98 9.63a3.03 3.03 0 0 1 0 .74l8.94 4.47A2.99 2.99 0 0 1 20 17a3 3 0 1 1-5.98-.37l-8.94-4.47z" />
                    </svg>
                    <span class="ml-2">Share</span>
                  </button>
                  <div class="flex items-center">
                    <span>Was this review helplful?</span>
                    <button class="flex items-center ml-6">
                      <svg
                        class="w-3 h-3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M11 0h1v3l3 7v8a2 2 0 0 1-2 2H5c-1.1 0-2.31-.84-2.7-1.88L0 12v-2a2 2 0 0 1 2-2h7V2a2 2 0 0 1 2-2zm6 10h3v10h-3V10z" />
                      </svg>
                      <span class="ml-2">56</span>
                    </button>
                    <button class="flex items-center ml-4">
                      <svg
                        class="w-3 h-3"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M11 20a2 2 0 0 1-2-2v-6H2a2 2 0 0 1-2-2V8l2.3-6.12A3.11 3.11 0 0 1 5 0h8a2 2 0 0 1 2 2v8l-3 7v3h-1zm6-10V0h3v10h-3z" />
                      </svg>
                      <span class="ml-2">10</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProfileDetail;

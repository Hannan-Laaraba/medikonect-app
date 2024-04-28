import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { providers } from "../specialty";
import Img from "../../asset/img.jpg";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import "./styles.css";
import Review from "../patientdashboard/review";

function ProfileDetail() {
  const { id } = useParams();

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    // Fetch reviews data from the backend
    const fetchReviews = async () => {
      try {
        const response = await fetch(`http://localhost:5050/reviews`);
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }
        const data = await response.json();
        setReviews(data.Reviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

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
          // className="bg-cover bg-center"
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
                        <Link
                          to="/signin"
                          className="text-white bg-[#C11574] hover:bg-[#890b50] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
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
              <ul>
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
            <div class="ml-6">
              <p class="flex items-baseline">
                <span class="text-gray-600 font-bold">Richie Rich</span>
              </p>

              <div class="flex items-center mt-4 text-gray-600">
                <div class="flex items-center ml-4">
                  <span class="text-sm">Doctor's Rating</span>
                  <div class="flex items-center ml-2">
                    <svg
                      class="w-3 h-3 fill-current text-yellow-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg
                      class="w-3 h-3 fill-current text-yellow-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg
                      class="w-3 h-3 fill-current text-yellow-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg
                      class="w-3 h-3 fill-current text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg
                      class="w-3 h-3 fill-current text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="mt-3">
                <p class="mt-1">Amazing service. I'ld definetely recommend.</p>
              </div>
            </div>
            <br /> <br />
            <div class="ml-6">
              <p class="flex items-baseline">
                <span class="text-gray-600 font-bold">MickeyMond</span>
              </p>

              <div class="flex items-center mt-4 text-gray-600">
                <div class="flex items-center">
                  <span class="text-sm">Doctor's rating</span>
                  <div class="flex items-center ml-2">
                    <svg
                      class="w-3 h-3 fill-current text-yellow-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg
                      class="w-3 h-3 fill-current text-yellow-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg
                      class="w-3 h-3 fill-current text-yellow-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg
                      class="w-3 h-3 fill-current text-yellow-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <svg
                      class="w-3 h-3 fill-current text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="mt-3">
                <p class="mt-1">
                  Doctor is one of the best I have ever consulted with.
                </p>
              </div>
            </div>
            <div className="pt-20 ">
              {" "}
              <button className="text-white bg-[#C11574] hover:bg-[#890b50] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <Link to="/review">Leave review </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProfileDetail;

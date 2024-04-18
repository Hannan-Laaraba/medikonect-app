import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Medikonect from "../../asset/medikonect.png";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/login", { email, password });
      // Handle successful login, e.g., store token in local storage
    } catch (error) {
      setError("Wrong email or password!!");
    }
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
    if (!event.target.checked) {
      localStorage.removeItem("rememberedUser");
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (rememberMe) {
      localStorage.setItem("rememberedUser", event.target.value);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div 
      style={{
        backgroundImage:` linear-gradient(top to bottom rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.9)), url('https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg?t=st=1713293442~exp=1713297042~hmac=20d1280564f3d3d366ccc81744ce87f560b0c2ce351a82261a6200a178ee05d0&w=740')`,backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div class="sm:m-10  flex justify-center ">
          <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div>
              <img
                src={Medikonect}
                class="w-56"
              />
            </div>
            <div class="mt-12 flex flex-col items-center">
              <div class="w-full flex-1 mt-8">
                <div class="flex flex-col items-center">
                  {/* <button class="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-[#f298d8] text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                    <div class="bg-white p-2 rounded-full">
                      <svg class="w-4" viewBox="0 0 533.5 544.3">
                        <path
                          d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                          fill="#4285f4"
                        />
                        <path
                          d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                          fill="#34a853"
                        />
                        <path
                          d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                          fill="#fbbc04"
                        />
                        <path
                          d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                          fill="#ea4335"
                        />
                      </svg>
                    </div>
                    <span class="ml-4">Sign In with Google</span>
                  </button> */}
                </div>

                <div class="my-12 border-b text-center">
                  <div class="leading-none px-2 inline-block text-sm text-gray-100 tracking-wide font-medium bg-transparent transform translate-y-1/2">
                    Or sign In with MediKonect Email
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  <div class="mx-auto max-w-xs">
                    <div class="relative">
                      <input
                        class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                      />
                      <i className="fa-regular fa-envelope w-[18px] h-[18px] absolute right-2 top-2/4 transform -translate-y-2/4"></i>
                    </div>
                    <div class="relative">
                      <input
                        class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <i
                        className={`fa-solid fa-eye${
                          showPassword ? "-slash" : ""
                        } w-[18px] h-[18px] absolute right-2 top-2/4  cursor-pointer`}
                        onClick={togglePasswordVisibility}
                      ></i>
                    </div>
                    {error && (
                      <p
                        className=" text-red-700 px-2 py-2 rounded relative mt-2"
                        role="alert"
                      >
                        {error}
                      </p>
                    )}
                    <div className="flex items-center justify-between gap-2 mt-5">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          checked={rememberMe}
                          onChange={handleRememberMeChange}
                        />
                        <label
                          htmlFor="remember-me"
                          className="ml-3 block text-sm text-blue-300"
                        >
                          Remember me
                        </label>
                      </div>
                      <div>
                        <Link
                          to="/forgot-password"
                          className="text-blue-300 font-semibold text-sm hover:underline"
                        >
                          Forgot Password?
                        </Link>
                      </div>
                    </div>

                    <button class="mt-5 tracking-wide font-semibold bg-[#f298d8] text-white-500 w-full py-4 rounded-lg hover:bg-[#C11574] hover:text-white-500 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none ">
                      <svg
                        class="w-6 h-6 -ml-2"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="8.5" cy="7" r="4" />
                        <path d="M20 8v6M23 11h-6" />
                      </svg>
                      <span class="ml-">Sign In</span>
                    </button>
                    <p class="mt-6 text-xs text-gray-300 text-center">
                      I agree to abide by MediKonect
                      <br />
                      <a
                        href="#"
                        class="border-b border-gray-100 border-dotted"
                      >
                        Terms of Service
                      </a>
                      <br />
                      and its
                      <a
                        href="#"
                        class="border-b border-gray-100 border-dotted"
                      >
                        {" "}
                        <br />
                        Privacy Policy
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React, { useState } from "react";
import Medikonect from "../../asset/medikonect.png";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-10 active:text-[#C11574] bg-white border-gray-200 text-[#27115f] text-l p-6">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={Medikonect} className="h-14" alt="medikonect" />
        </a>
        <button
          onClick={toggleDropdown}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 hover:text-[#C11574] text-[#27115f]">
            <li>
              < Link smooth to="#"
                className="block py-2 px-3 rounded md:bg-transparent md:text-[#27115f] md:p-0 md:text-[#27115f] hover:text-[#C11574] hover:underline md:bg-transparent"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link smooth to= "#ourpractice"
                className="block py-2 px-3 text-[#27115f] rounded md:bg-transparent md:text-[#27115f] md:p-0 hover:text-[#C11574] hover:underline md:bg-transparent"
                aria-current="page"
              >
                Our Practice
              </Link>
            </li>
            <li>
              <Link smooth to= "/specialty"
                className="block py-2 px-3 text-[#27115f] rounded md:hover:bg-transparent md:border-0 md:hover:text-[#C11574] hover:underline md:p-0 dark:text-white md:dark:hover:text-blue-500 hover:text-white md:hover:bg-transparent"
              >
                Providers
              </Link>
            </li>
            <li>
              <Link smooth to= "#services"
                className="block py-2 px-3 text-[#27115f] rounded md:hover:bg-transparent md:border-0 md:hover:text-[#C11574] hover:underline md:p-0  "
              >
                Services
              </Link>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                className="flex relative items-center justify-between w-full py-2 px-3 text-white bg-[#C11574] focus:ring-2 focus:ring-[#890b50] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
              >
                Sign Up{" "}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {isOpen && (
                <div
                  id="dropdownNavbar"
                  className="z-10 absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a
                        href="/signin"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        As a provider
                      </a>
                    </li>
                    <li>
                      <a
                        href="/signup"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        As a patient
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

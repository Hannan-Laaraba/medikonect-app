import React, { useState } from "react";
import Medikonect from "../../asset/medikonect.png";
import Appointment from "./appointments";
import BookingForm from "./bookingform";
import PatientProfile from "./patientprofile";

export default function PatientDashboard() {
  const [activeComponent, setActiveComponent] = useState("");

  const handleComponentChange = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
        rel="stylesheet"
      />
      <div className="bg-orange-100 min-h-screen">
        <div className="fixed bg-white text-blue-800 px-10 py-1 z-10 w-full">
          <div className="flex items-center justify-between py-2 text-5x1">
            <div className="">
              <img src={Medikonect} alt="medikonect" className="h-12" />
            </div>
            <div className="flex items-center text-gray-500">
              <span
                className="material-icons-outlined p-2"
                style={{ fontSize: "30px" }}
              >
                search
              </span>
              <span
                className="material-icons-outlined p-2"
                style={{ fontSize: "30px" }}
              >
                notifications
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-row  pt-24 px-10 pb-4">
          <div className="w-2/12 mr-6">
            <div className="bg-white rounded-xl shadow-lg align-center mb-6 px-6 py-4 text-center">
              <div className="mx-auto mb-2 h-20 w-20 overflow-hidden rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="h-20 w-20 p-5 text-white bg-gray-500 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </div>
              <p className="text-center font-bold">Laaraba Ashrawee</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
              <a
                href="#"
                className="inline-block text-gray-600 hover:text-black my-4 w-full"
                onClick={() => handleComponentChange("showpatientprofile")}
              >
                <span className="material-icons-outlined float-left pr-2">
                  face
                </span>
                Profile
                <span className="material-icons-outlined float-right">
                  keyboard_arrow_right
                </span>
              </a>
              <a
                href="#"
                className="inline-block text-gray-600 hover:text-black my-4 w-full"
                onClick={() => handleComponentChange("show-appointment")}
              >
                <span className="material-icons-outlined float-left pr-2">
                  book
                </span>
                Appointments
                <span className="material-icons-outlined float-right">
                  keyboard_arrow_right
                </span>
              </a>
              <a
                href="#"
                className="inline-block text-gray-600 hover:text-black my-4 w-full"
                onClick={() => handleComponentChange("showbookingform")}
              >
                <span className="material-icons-outlined float-left pr-2">
                  edit 
                </span>
                Booking Form
                <span className="material-icons-outlined float-right">
                  keyboard_arrow_right
                </span>
              </a>
              <a
                href="#"
                className="inline-block text-gray-600 hover:text-black my-4 w-full"
              >
                <span className="material-icons-outlined float-left pr-2">
                  settings
                </span>
                Settings
                <span className="material-icons-outlined float-right">
                  keyboard_arrow_right
                </span>
              </a>
              <a
                href="/logout"
                className="inline-block text-gray-600 hover:text-black my-4 w-full"
              >
                <span className="material-icons-outlined float-left pr-2">
                  power_settings_new
                </span>
                Log out
                <span className="material-icons-outlined float-right">
                  keyboard_arrow_right
                </span>
              </a>
            </div>
          </div>
        
          {/* conditional rendering of component */}
          {activeComponent === "showpatientprofile" && <PatientProfile />}
          {activeComponent === "show-appointment" && <Appointment />}
          {activeComponent === "showbookingform" && <BookingForm />}
        </div>
      </div>
      
    </>
  );
}

import React, { useState } from "react";
import Medikonect from "../../asset/medikonect.png";
import Appointment from "./appointments";
import BookingForm from "./bookingform";
import PatientProfile from "./patientprofile";
import Me from "../../asset/me.jpg"

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
        <div className="fixed bg-white text-[#27115f] px-10 py-1 z-10 w-full">
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

        <div className="flex flex-col md:flex-row text-[#27115f] pt-24 px-4 md:px-10 pb-4">
          <div className="w-full md:w-2/12 mr-6">
            <div className="bg-white rounded-xl shadow-lg align-center mb-8 px-8 py-4 text-center">
              <div className="mx-auto mb-2 h-28 w-28 overflow-hidden rounded-full">
               <img src={Me} alt=""/>
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

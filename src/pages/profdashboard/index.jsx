import React, { useState } from "react";
import Medikonect from "../../asset/medikonect.png";

export default function ProfDashboard() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // upload the selected file
    console.log("Uploading file:", selectedFile);
    // You can send the file to the backend for processing here
  };

  return (
    <>
      <div className="flex h-screen bg-gray-100">
        <div className="hidden md:flex flex-col w-64 bg-white">
          <div className="my-2 mb-2">
            <img src={Medikonect} alt="medikonect" style={{ height: "50px" }} />
          </div>
          <div className="flex flex-col flex-1 overflow-y-auto">
            <nav className="flex-1 px-2 py-4 bg-gray-800">
              <a
                href="#"
                className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
              >
                <i class="fa-regular fa-user pr-2"></i> 
                Profile
              </a>
              <a
                href="#"
                className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
              >
                <i class="fa-regular fa-message pr-2"></i>
                Messages
              </a>
      
              <a
                href="#"
                className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
              >
                <i class="fa-regular fa-calendar-check pr-2"></i>
                Appointments
              </a>
           
              <a
                href="#"
                className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
              >
                <i class="fa-solid fa-hospital-user pr-2"></i>
                Patients
              </a>

              <a
                href="#"
                className="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"
              >
                <i class="fa-solid fa-gear pr-2"></i>
                Settings
              </a>
              
            </nav>
          </div>
        </div>

        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
            <div className="flex items-center px-4">
              <input
                className="mx-4 w-full border rounded-md px-4 py-2"
                type="text"
                placeholder="Search"
              />
            </div>
            <div className="flex items-center pr-4">
              <button className="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l-7-7 7-7m5 14l7-7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="p-4">
            <h1 className="text-2xl font-bold">Health Professional's Dashboard</h1>
          </div>
        </div>
      </div>
    </>
  );
}

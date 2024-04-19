import React, { useState } from "react";

export default function UserDashboard() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Logic to upload the selected file
    console.log("Uploading file:", selectedFile);
    // You can send the file to the backend for processing here
  };

  return (
    <>
    
      <div>
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
          <div className="mb-2 p-4">
            <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900">
              Dashboard
            </h5>
          </div>
          <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
            {/* Your existing navigation items */}
          </nav>
        </div>

        <div className="w-full pt-5 px-4 mb-8 mx-auto ">
          {/* Upload Form */}
          <div className="flex flex-col items-center">
            <input
              type="file"
              accept=".jpg, .jpeg, .png, .pdf" 
              onChange={handleFileChange}
              className="hidden"
              id="upload-file"
            />
            <label
              htmlFor="upload-file"
              className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            >
              Select File
            </label>
            {selectedFile && (
              <button
                onClick={handleUpload}
                className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
              >
                Upload
              </button>
            )}
          </div>

          <div className="text-sm text-gray-700 py-1">
            Made with{" "}
            <a
              className="text-gray-700 font-semibold"
              href="https://www.material-tailwind.com/docs/react/sidebar?ref=tailwindcomponents"
              target="_blank"
              rel="noreferrer"
            >
              Material Tailwind
            </a>{" "}
            by{" "}
            <a
              href="https://www.creative-tim.com?ref=tailwindcomponents"
              className="text-gray-700 font-semibold"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Creative Tim
            </a>
            .
          </div>
        </div>
      </div>
    </>
  );
}

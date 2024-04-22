import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Dr1 from "../../asset/dr1.jpg"

export default function Profile({ match }) {
  // Dummy provider data
  const dummyProviderData = {
    id: "1",
    name: "Dr. Ummu Sulaim",
    image: {Dr1},
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum lorem ut purus facilisis, quis fermentum libero fringilla. Cras eu tortor volutpat, mattis nisi nec, cursus elit. Integer luctus libero quis luctus ultrices. Duis sit amet mi justo. Aenean vel consequat sapien.",
    specialties: ["Cardiology", "Internal Medicine", "Neurology"],
  };

  // Use match.params to get the provider ID from the URL
  const providerId = match.params.id;

  // Fetch provider data based on providerId from api
  //  use the dummyProviderData
  const providerData = dummyProviderData;

  // Render provider profile information
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">
              {providerData.name}
            </h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Contact
            </button>
          </div>
          <div className="mt-4">
            <img
              src={providerData.image}
              alt={providerData.name}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-bold text-gray-900">About</h2>
            <p className="mt-2">{providerData.about}</p>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-bold text-gray-900">Specialties</h2>
            <ul className="mt-2">
              {providerData.specialties.map((specialty) => (
                <li key={specialty} className="list-disc ml-4">
                  {specialty}
                </li>
              ))}
            </ul>
          </div>
          {/* Add more profile information here */}
        </div>
      </div>
      <Footer />
    </>
  );
}

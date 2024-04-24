import React, { useState } from "react";
import Navbar from "../../components/navbar";
import Img from "../../asset/img.jpg";
import Provider1 from "../../asset/provider1.jpg";
import Provider2 from "../../asset/provider2.jpg";
import Provider3 from "../../asset/provider3.jpg";
import Provider4 from "../../asset/provider4.jpg";
import Dr from "../../asset/dr.jpg";
import Dr1 from "../../asset/dr1.jpg";
import Dr2 from "../../asset/dr2.jpg";
import Dr3 from "../../asset/dr3.jpg";
import Dr4 from "../../asset/dr4.jpg";
import Dr5 from "../../asset/dr5.jpg";
import Dr6 from "../../asset/dr6.jpg";
import Dr7 from "../../asset/dr7.jpg";
import { Link } from "react-router-dom";
import CallToAction from "../../components/calltoaction";
import Footer from "../../components/footer";
import ProfileDetail from "../profiledetail";

export const providers = [
  { id: 1, image: Dr, name: "Dr. Hannan Abdul-Aziz", specialty: "Pediatrics" },
  { id: 2, image: Provider3, name: "Dr. Abdul-Aziz Mohammed", specialty: "Dermatology" },
  { id: 3, image: Provider2, name: "Dr. D'Angelo Kwakye", specialty: "Neurology" },
  { id: 4, image: Dr2, name: "Dr. Fredericka Tettey-Lowor", specialty: "Dentistry" },
  { id: 5, image: Dr7, name: "Dr. Kevin Apo-era", specialty: "Orthopedics" },
  { id: 6, image: Provider4, name: "Dr. Samantha Adda", specialty: "Nutrition and Diet" },
  { id: 7, image: Dr4, name: "Dr. Samuel Melomey", specialty: "Internal Medicine" },
  { id: 8, image: Dr1, name: "Dr. Mercy Korkor Essel", specialty: "Physician Assistant" },
  { id: 9, image: Dr3, name: "Dr. Ernest Obimpeh", specialty: "Ophthalmology" },
  { id: 10, image: Provider1, name: "Dr. Nadia Kafui", specialty: "Obstetrics and Gynaecology" },
  { id: 11, image: Dr5, name: "Dr. Williams", specialty: "Psychiatry" },
  { id: 12, image: Dr6, name: "Dr. Rofiat Murtala", specialty: "Psychiatry" },

];


// ProviderCard component
const ProviderCard = ({ provider, profileView }) => (
  <div className="max-w-sm mx-auto overflow-hidden bg-gray-100 rounded-lg shadow-lg hover:shadow-[#27115f]">
    <div className="relative">
      <img
        className="w-full h-48 object-cover"
        src={provider.image}
        alt="Profile Image"
        style={{ height: "50vh" }}
      />
    </div>
    <div className="text-center px-6 py-4">
      <div className="text-xl font-semibold text-gray-800">{provider.name}</div>
      <br />
      {/* render ProfileDetail component only if profileView is true */}
      {profileView && <ProfileDetail providers={[provider]} />}

      <Link to={`/specialty/${provider.id}`} className="text-[#C11574] hover:underline">
        View Profile
      </Link>
    </div>
  </div>
);


export default function Specialty() {
  
  const [specialtyFilter, setSpecialtyFilter] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [profileView, setProfileView] = useState(false);

  // Define function to toggle profile view
  const toggleProfileView = () => setProfileView(!profileView);

  // Filter healthcare providers
  const filteredProviders = providers.filter((provider) => {
    // Filter by specialty
    const specialtyMatch = specialtyFilter === "" || provider.specialty === specialtyFilter;
    // Filter by name
    const nameMatch = nameFilter === "" || provider.name.toLowerCase().includes(nameFilter.toLowerCase());
    return specialtyMatch && nameMatch;
  });

  // Get unique specialty options
  const specialtyOptions = Array.from(new Set(providers.map(provider => provider.specialty)));

  return (
    <>
      <Navbar />
      {profileView && <ProfileDetail providers={providers} />}
      <div className="bg-cover bg-center bg-fixed" style={{
        backgroundImage: `linear-gradient( rgb(248,212,238), rgba(0, 0, 0, 0)), url(${Img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "45vh",
      }}>
        <h1 className="text-[#27115f] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold pt-14 text-center">
          Providers
        </h1>
        <h3 className="text-[#27115f] text-xl sm:text-2xl md:text-3xl lg:text-4xl  pt-12 text-center">
          Experienced Healthcare Professionals
        </h3>
      </div>
      <div className="text-[#27115f] text-lg sm:text-xl md:text-2xl lg:text-3xl p-10 text-center">
        <p>We are a dedicated team of highly skilled professionals,</p>
        <p className="p-4">here to address all of your health concerns</p>
        <p>with expertise and compassion.</p>
      </div>
      <div className="text-[#27115f] text-base sm:text-lg md:text-xl lg:text-2xl p-10 text-center">
        <p>
          We proudly boast of a team of highly experienced healthcare
          professionals who are passionate
        </p>
        <p>
          {" "}
          about your well-being. Our team includes board-certified doctors,
          nurses, and support staff,
        </p>
        <p>
          {" "}
          all working collaboratively to provide the highest standard of care.
        </p>
      </div>
      <div className="text-[#27115f] text-xl sm:text-2xl md:text-3xl p-10 text-center">
        <p className="text-xl sm:text-2xl md:text-3xl">YOU ARE IN GOOD HANDS</p>
        <p className="font-bold p-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Dedicated Professionals
        </p>
      </div>

      
      <div className="flex justify-center gap-4 mb-8">
        {/* filter specialty */}
        <div>
          <label className="block mb-2">Specialty:</label>
          <select
            value={specialtyFilter}
            onChange={(e) => setSpecialtyFilter(e.target.value)}
            className="block border border-gray-300 rounded-md p-2"
          >
            <option value="">All</option>
            {specialtyOptions.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>

        {/*  filter name */}
        <div>
          <label className="block mb-2">Name:</label>
          <input
            type="text"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
            placeholder="Search by name"
            className="block border border-gray-300 rounded-md p-2"
          />
        </div>
      </div>
      {/* Provider cards section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 m-10">
        {filteredProviders.map((provider, index) => (
          <ProviderCard key={index} provider={provider} />
          
        ))}
      </section>

      <CallToAction />
      <Footer />
    </>
  );
}

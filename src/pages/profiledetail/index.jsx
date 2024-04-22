import React from "react";
import { useParams } from "react-router-dom";
import { providers } from "../specialty";
import Img from "../../asset/img.jpg";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

function ProfileDetail() {
  const { id } = useParams();

  // Find the provider with the matching ID
  const provider = providers.find(provider => provider.id.toString() === id);

  if (!provider) {
    return <div>Provider not found.</div>;
  }

  return (
    <>
    <Navbar/>
    <div>
      <div className="bg-cover bg-center bg-fixed" style={{
        backgroundImage: `linear-gradient( rgb(248,212,238), rgba(0, 0, 0, 0)), url(${Img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "50vh",
      }}>
        <h2 className="text-[#27115f] text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-bold pt-20 text-center">{provider.name}</h2>
        <p className="text-[#27115f] text-xl sm:text-2xl md:text-3xl lg:text-5xl  pt-20 text-center"> {provider.specialty}</p>
      </div>
      
      
      <img src={provider.image} alt={provider.name} />
      {/* Add more profile details here */}
    </div>
    <Footer/>
    </>
  );
}

export default ProfileDetail;

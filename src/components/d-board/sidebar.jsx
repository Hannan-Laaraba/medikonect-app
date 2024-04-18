import React, { useState } from "react";
import { Link } from "react-router-dom";
import Medikonect from "../../asset/medikonect.png";

export const  Sidebar = ({sidebarToggle, setUserPage}) => {

  return (
    <div className={`${sidebarToggle ? " hidden " : " block " } ease-in-out w-72 bg-violet-100 fixed h-full px-4 py-2`}>
      <div className="my-2 mb-4">
      <img src={Medikonect} alt="medikonect" style={{height: "50px"}}/>
      </div>
        <hr />
        <ul className="mt-3 text-black font-bold">
          
          <li className="mb-2 rounded hover:shadow hover:bg-violet-700 hover:text-white py-2" onClick={()=> setUserPage('dashboard')}>
            
            <Link className=" px-2"><i className="fa-solid fa-house inline-block 1-6 h-6 mr-2 -mt-2"></i>Dashboard</Link>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-violet-700 hover:text-white py-2"  onClick={()=> setUserPage('patients')}>
            
            <Link className="px-2"><i className="fa-solid fa-book h-6 mr-2 -mt-2"></i>My Patients</Link>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-violet-700 hover:text-white py-2" onClick={()=> setUserPage('schedule')}>
            
            <Link className="px-2"><i className="fa-solid fa-star h-6 mr-2 -mt-2"></i>My Schedule</Link>
          </li>
          <li className="mb-2 rounded hover:shadow hover:bg-violet-700 hover:text-white py-2" onClick={()=> setUserPage('experiences')}>
            
            <Link className="px-2"><i className="fa-solid fa-briefcase h-6 mr-2 -mt-2"></i>Experiences</Link>
          </li>
        </ul>
    </div>
  );
};

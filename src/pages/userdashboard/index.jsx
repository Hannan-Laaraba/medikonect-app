import React, { useState } from "react";
import { Nav } from "../../components/d-board/nav";
import { Sidebar } from "../../components/d-board/sidebar";
import { DashboardItems } from "./dashboarditems";
import Appointment from "../patientdashboard/appointment";


export default function UserDashboard(){
    const [sidebarToggle, setSidebarToggle] = useState (false);
  const [userPage, setUserPage] = useState("dashboard");

    return(
        <>
        <div className="flex bg-violet-100">
        <Sidebar
          sidebarToggle={sidebarToggle}
          setUserPage={setUserPage}
        />
        <Nav
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
        />
      </div>

      <div className="bg-violet-100">
        {/* {userPage === "dashboard" && <DashboardItems sidebarToggle={sidebarToggle} setUserPage={setUserPage} />} */}
        {userPage === "posts" &&  <Appointment sidebarToggle={sidebarToggle} setUserPage={setUserPage} />}
        {/* {userPage === "achievements" && <p> <AdminAchievements sidebarToggle={sidebarToggle} /> </p>} */}
        {/* {userPage === "experiences" && <p> <AdminExperiences sidebarToggle={sidebarToggle} /> </p>}  */}
      </div>
        </>
    )
}
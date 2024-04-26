import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/homepage";
import SignIn from "./pages/signin";
import Signup from "./pages/signup";
import OurPractice from "./components/ourpractice";
import OurServices from "./components/ourservices";
import OurExperts from "./components/ourexperts";
import ProfDashboard from "./pages/profdashboard";
import Specialty from "./pages/specialty";
import Profile from "./pages/profiledetail";
import Appointment from "./pages/patientdashboard/appointment";
import PatientDashboard from "./pages/patientdashboard";
import Review from "./pages/patientdashboard/review";

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/signup", element: <Signup /> },
  { path: "/ourpractice", element: <OurPractice /> },
  { path: "/ourservices", element: <OurServices /> },
  { path: "/patientdashboard", element: <PatientDashboard /> },
  { path: "/profdashboard", element: <ProfDashboard /> },
  { path: "/specialty", element: <Specialty /> },
  { path: "/specialty/:id", element: <Profile /> },
  { path: "/appointment", element: <Appointment /> },
  { path: "/review", element: <Review /> },
  { path: "/ourexperts", element: <OurExperts /> },

]);

function App() {
  return (
  <>
  <RouterProvider router={router} />
  </>
  );
}

export default App;

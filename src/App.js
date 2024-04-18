import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/homepage";
import SignIn from "./pages/signin";
import Signup from "./pages/signup";
import Contact from "./components/contact";
import OurPractice from "./components/ourpractice";
import OurServices from "./components/ourservices";
import Dashboard from "./pages/Administrator/dashboard";
import OurExperts from "./components/ourexperts";

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/signup", element: <Signup /> },
  { path: "/ourpractice", element: <OurPractice /> },
  { path: "/ourservices", element: <OurServices /> },
  { path: "/contact", element: <Contact /> },
  { path: "/dashboard", element: <Dashboard /> },
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

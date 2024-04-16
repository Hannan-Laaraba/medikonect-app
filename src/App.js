import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/homepage";
import SignIn from "./pages/signin";
import Signup from "./pages/signup";
import Contact from "./pages/contact";
import OurPractice from "./components/ourpractice";
import OurServices from "./components/ourservices";

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/signup", element: <Signup /> },
  { path: "/ourpractice", element: <OurPractice /> },
  { path: "/ourservices", element: <OurServices /> },
  { path: "/contact", element: <Contact /> },

]);

function App() {
  return (
  <>
  <RouterProvider router={router} />
  </>
  );
}

export default App;

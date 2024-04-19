import React, { useState } from "react";

export default function Signup () {

  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  return (
    <div className={`container mx-auto ${isActive ? 'active' : ''}`} id="container">
      {/* Sign Up section */}
      <div className="form-container sign-up">
        <form className="bg-white p-6 rounded-lg">
          <h1 className="text-2xl font-bold mb-4">Create Account</h1>

          <div className="social-icons mb-4">
            <a href="#" className="google inline-block mr-2">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="facebook inline-block mr-2">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="github inline-block mr-2">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="linkedin inline-block">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span className="block mb-4">or use your email for registration</span>
          <input className="block mb-4 border border-gray-300 rounded p-2 w-full" type="text" placeholder="Name" />
          <input className="block mb-4 border border-gray-300 rounded p-2 w-full" type="email" placeholder="Email" />
          <input className="block mb-4 border border-gray-300 rounded p-2 w-full" type="password" placeholder="Password" />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Sign Up</button>
        </form>
      </div>

      {/* Sign in section */}
      <div className="form-container sign-in">
        <form className="bg-white p-6 rounded-lg">
          <h1 className="text-2xl font-bold mb-4">Sign In</h1>
          <div className="social-icons mb-4">
            <a href="#" className="google inline-block mr-2">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#" className="facebook inline-block mr-2">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="github inline-block mr-2">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="linkedin inline-block">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <span className="block mb-4">or use your email and Password</span>
          <input className="block mb-4 border border-gray-300 rounded p-2 w-full" type="email" placeholder="Email" />
          <input className="block mb-4 border border-gray-300 rounded p-2 w-full" type="password" placeholder="Password" />
          <a href="#" className="block mb-4 text-blue-500 hover:text-blue-800">Forgot Your Password?</a>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Sign In</button>
        </form>
      </div>

      {/* toggle container with animation*/}
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1 className="text-2xl font-bold">Welcome Back!</h1>
            <p className="mb-4">Enter your persona details to use all of the site features</p>
            <button className={`hidden ${isActive ? '' : 'block'}`} id="login" onClick={handleLoginClick}>Sign In</button>
          </div>

          <div className="toggle-panel toggle-right">
            <h1 className="text-2xl font-bold">Hello, Friend!</h1>
            <p className="mb-4">Register with your persona details to use all of the site features</p>
            <button className={`hidden ${isActive ? 'block' : ''}`} id="register" onClick={handleRegisterClick}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};



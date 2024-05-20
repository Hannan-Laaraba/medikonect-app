import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const rememberedUser = localStorage.getItem("rememberedUser");
    if (rememberedUser) {
      setEmail(rememberedUser);
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_MEDIKONECT_API}/login`, { email, password });
      // Handle successful login, e.g., store token in local storage
      if (rememberMe) {
        localStorage.setItem("rememberedUser", email);
      } else {
        localStorage.removeItem("rememberedUser");
      }
    } catch (error) {
      setError("Wrong email or password!!");
    }
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
    if (!event.target.checked) {
      localStorage.removeItem("rememberedUser");
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main className="mx-auto flex min-h-screen w-full items-center  justify-center bg-[#db92ba] text-white">
      <section className="flex w-[30rem] flex-col space-y-10 bg-gray-900 p-8 rounded-lg shadow-md">
        <div className="text-center text-4xl font-medium">Log In</div>

        <div className="flex justify-between w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input
            type="text"
            placeholder="Email or Username"
            className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
            value={email}
            onChange={handleEmailChange}
          />
          <i className="fa-regular fa-envelope"></i>
        </div>

        <div className="flex justify-between w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i
            className={`fa-regular ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
            onClick={togglePasswordVisibility}
            style={{ cursor: "pointer" }}
          ></i>
        </div>

        <button
          onClick={handleSubmit}
          className="transform rounded-sm bg-[#C11574] py-2 font-bold duration-300 hover:bg-[#db92ba]"
        ><Link to="/patientdashboard">
          LOG IN</Link>
        </button>

        <a
          href="#"
          className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300"
        >
          FORGOT PASSWORD?
        </a>

        <p className="text-center text-lg">
          No account?
          <a
            href="/signup"
            className="font-medium text-[#C11574] underline-offset-4 hover:underline"
          >
            Create One
          </a>
        </p>
      </section>
    </main>
  );
}

import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import signImg from "../images/signup.png";
import logo from "../images/image.svg";

const SignUp = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form fields
    if (!name || !username || !email || !password) {
      setError("Please fill in all the required fields.");
      return;
    }

    if (!terms) {
      setError("You must agree to the terms and conditions.");
      return;
    }

    // Perform the sign-up logic here (e.g., send the data to a server)
    console.log("Submitting form data:", {
      name,
      username,
      email,
      password,
      terms,
    });
    navigate("/profile");
    // Reset the form
    setName("");
    setUsername("");
    setEmail("");
    setPassword("");
    setTerms(false);
    setError("");
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="hidden md:flex md:max-w-md bg-yellow-400 items-center justify-center">
        <div className="px-10 mx-auto">
          <img src={logo} className="self-top mb-3" />
          <h1 className="text-3xl font-bold text-yellow-800 mb-6">
            Discover the world's top Designers & Creatives.
          </h1>
          <img src={signImg} alt="signup" className="w-96" />
          <p className="text-yellow-800 font-sm self-end">
            Art by <u>Peter Tarka</u>
          </p>
        </div>
      </div>
      {/* Right Section */}
      <div className="flex-1 bg-white">
        <div className="p-5 md:p-10">
          <div className="px-auto relative">
            <p className="text-black text-sm absolute right-0 hidden md:block">
              Already a member?{" "}
              <a className="text-blue-700 cursor-pointer">Sign in</a>
            </p>
          </div>
          <div className="max-w-md px-auto py-12 rounded-lg mx-auto my-auto">
            <div className="mb-8">
              <h1 className="text-black font-bold text-3xl">
                Sign up to Dribbble
              </h1>
            </div>
            {error && (
              <div className=" text-red-500 px-4 py-3 rounded mb-6">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-6 flex flex-col md:flex-row">
                <div className="md:w-1/2 md:mr-2 mb-4 md:mb-0">
                  <label
                    htmlFor="name"
                    className="block text-black font-bold mb-1 text-base"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full px-3 py-2 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="md:w-1/2">
                  <label
                    htmlFor="username"
                    className="block text-black font-bold mb-1 text-base"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="johndoe"
                    className="w-full px-3 py-2 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-black font-bold mb-1 text-base"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="account@refero.design"
                  className="w-full px-3 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-black mb-1 font-bold"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="6+ characters"
                  className="w-full px-3 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <div className="flex">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={terms}
                    onChange={(e) => setTerms(e.target.checked)}
                    className="mr-2 h-4 w-4 text-blue-700 focus:ring-blue-500 border-gray-300"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700">
                    Creating an account means you're okay with our{" "}
                    <a className="text-blue-700">Terms of Service</a>,{" "}
                    <a className="text-blue-700">Privacy Policy</a>, and our
                    default{" "}
                    <a className="text-blue-700">Notification Settings</a>.
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="p-3 px-5 bg-pink-600 text-white font-bold rounded-md hover:bg-pink-700"
              >
                Create Account
              </button>
            </form>
            <div className="flex justify-start mt-2 md:hidden">
              <p className="text-black text-sm">
                Already a member?{" "}
                <a className="text-blue-700 cursor-pointer">Sign in</a>
              </p>
            </div>
            <div className="mt-6 text-xs text-gray-400">
              This site is protected by reCAPTCHA and the Google{" "}
              <a className="text-blue-700">Privacy Policy</a> and{" "}
              <a className="text-blue-700">Terms of Service</a> apply.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Email validation for specific domains
    const emailENSNN = /^[a-zA-Z0-9._%+-]+@student\.ensnn\.dz$/;
    const emailNSAST = /^[a-zA-Z0-9._%+-]+@student\.ensnn\.dz$/;
    const emailENSIA = /^[a-zA-Z0-9._%+-]+@ensia\.edu\.dz$/;
    const emailNHSM = /^[a-zA-Z0-9._%+-]+@nhsm\.edu\.dz$/;
    const emailNSCS = /^[a-zA-Z0-9._%+-]+@student\.ensnn\.dz$/;
    if (
      !emailENSNN.test(email) &&
      !emailNSAST.test(email) &&
      !emailENSIA.test(email) &&
      !emailNHSM.test(email) &&
      !emailNSCS.test(email)
    ) {
      setErrorMessage("Your email is not accepted");
      return;
    }

    if (password.length < 7) {
      setErrorMessage("Password must be at least 7 characters long");
      return;
    }

    try {
      setErrorMessage("");

      await axios.post("/auth/register", {
        username,
        email,
        password,
        firstName,
        lastName,
      });

      navigate("/verification");
    } catch (error) {
      console.error(error);
      setErrorMessage("Registration failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-8 text-center text-[#38b2ac]">
          Register
        </h1>
        {errorMessage && (
          <div className="bg-red-500 text-white p-3 rounded mb-4 text-center">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block mb-1 text-gray-400">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38b2ac] text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="firstName" className="block mb-1 text-gray-400">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38b2ac] text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block mb-1 text-gray-400">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38b2ac] text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38b2ac] text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 text-gray-400">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38b2ac] text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#38b2ac] text-white py-3 rounded-lg hover:bg-[#2d928d] transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

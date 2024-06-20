import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/login", {
        email,
        password,
      });

      if (!response.data.user.is_verified) {
        navigate("/verification");
        return;
      }

      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("token", response.data.token);

      onLogin(response.data.user);

      navigate("/");
    } catch (error) {
      console.log(error);
      setErrorMessage("Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-8 text-center text-[#38b2ac]">
          Login
        </h1>
        {errorMessage && (
          <div className="bg-red-500 text-white p-3 rounded mb-4 text-center">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
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
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

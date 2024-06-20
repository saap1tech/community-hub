import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../axios";

const EmailVerification = () => {
  const [token, setToken] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.get("/verify-email", {
        params: { token },
      });

      navigate("/");
    } catch (error) {
      setErrorMessage("Invalid verification token.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-8 text-center text-[#38b2ac]">
          Email Verification
        </h1>
        {errorMessage && (
          <div className="bg-red-500 text-white p-3 rounded mb-4 text-center">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="token" className="block mb-1 text-gray-400">
              Verification Token
            </label>
            <input
              type="text"
              id="token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#38b2ac] text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#38b2ac] text-white py-3 rounded-lg hover:bg-[#2d928d] transition duration-300"
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailVerification;
